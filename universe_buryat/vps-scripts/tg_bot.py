#!/usr/bin/env python3
"""
Watches @universe_buryat for new posts and updates posts.json in real-time.
Also periodically updates stats.json with subscriber count.
Runs as a systemd service.
"""

import os
import json
import asyncio
import subprocess
import html
from datetime import datetime
from telethon import TelegramClient, events
from telethon.tl.functions.channels import GetFullChannelRequest

# === CONFIG ===
API_ID = 30908105
API_HASH = "67ed19d9d8189d34dd40c30864b5c710"
CHANNEL = "universe_buryat"

MEDIA_DIR = "/var/www/universe_buryat/media"
POSTS_JSON = "/var/www/universe_buryat/posts.json"
STATS_JSON = "/var/www/universe_buryat/stats.json"
SESSION_FILE = "/root/telethon_session"
STATS_INTERVAL = 300  # update stats every 5 minutes

WEB_ROOT = "/var/www/universe_buryat"
SITE_URL = "https://chimitdorzhi.tech/universe_buryat"
VPS_URL = "https://8d4a125849ec.vps.myjino.ru"
SITEMAP_PATH = os.path.join(WEB_ROOT, "sitemap.xml")
INDEX_HTML = os.path.join(WEB_ROOT, "index.html")

THUMBS_DIR = os.path.join(MEDIA_DIR, "thumbs")
os.makedirs(MEDIA_DIR, exist_ok=True)
os.makedirs(THUMBS_DIR, exist_ok=True)


def create_thumbnail(filepath, filename):
    """Create a thumbnail using ImageMagick convert."""
    thumb_path = os.path.join(THUMBS_DIR, filename)
    try:
        subprocess.run(
            ["convert", filepath, "-resize", "400x600^", "-quality", "75", thumb_path],
            check=True, capture_output=True
        )
        print(f"  Thumbnail created: {filename}")
    except Exception as e:
        print(f"  Thumbnail error: {e}")


def load_posts():
    if os.path.exists(POSTS_JSON):
        with open(POSTS_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_posts(posts):
    with open(POSTS_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    generate_sitemap(posts)
    inject_seo_html(posts)


def generate_sitemap(posts):
    """Generate sitemap.xml for search engines."""
    try:
        now = datetime.utcnow().strftime("%Y-%m-%d")
        urls = [
            f'  <url>\n    <loc>{SITE_URL}/</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>'
        ]
        for post in posts[:200]:
            urls.append(
                f'  <url>\n    <loc>{post["link"]}</loc>\n    <lastmod>{post["date"][:10]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>'
            )
        sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(urls) + '\n</urlset>\n'
        with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
            f.write(sitemap)
        print(f"Sitemap updated: {len(urls)} URLs")
    except Exception as e:
        print(f"Sitemap error: {e}")


def inject_seo_html(posts):
    """Inject static post content into index.html for SEO crawlers."""
    try:
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            content = f.read()

        # Build static HTML block for crawlers
        seo_start = "<!-- SEO_POSTS_START -->"
        seo_end = "<!-- SEO_POSTS_END -->"

        cards = []
        for post in posts:
            text_escaped = html.escape(post.get("text", "") or "—")
            date_str = post.get("date", "")[:10]
            link = html.escape(post.get("link", ""))
            img_tag = ""
            if post.get("image"):
                img_src = html.escape(VPS_URL + "/" + post["image"])
                img_tag = f'<img src="{img_src}" alt="{text_escaped[:80]}" loading="lazy" width="400" height="600">'
            cards.append(
                f'<article class="seo-post">'
                f'<a href="{link}">{img_tag}'
                f'<time datetime="{date_str}">{date_str}</time>'
                f'<p>{text_escaped}</p></a></article>'
            )

        seo_block = f'{seo_start}\n<noscript><div class="seo-posts-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:20px;">\n' + "\n".join(cards) + "\n</div></noscript>\n{seo_end}"

        if seo_start in content:
            # Replace existing SEO block
            import re
            pattern = re.escape(seo_start) + r".*?" + re.escape(seo_end)
            content = re.sub(pattern, seo_block, content, flags=re.DOTALL)
        else:
            # Insert after postsGrid div
            marker = '<div class="ub-posts-grid" id="postsGrid"></div>'
            if marker in content:
                content = content.replace(marker, marker + "\n" + seo_block)
            else:
                print("Warning: Could not find postsGrid marker in index.html")
                return

        with open(INDEX_HTML, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"SEO HTML injected: {len(cards)} posts")
    except Exception as e:
        print(f"SEO inject error: {e}")


async def update_stats(client, channel_entity):
    """Fetch channel stats and save to stats.json."""
    try:
        full = await client(GetFullChannelRequest(channel_entity))
        posts = load_posts()
        stats = {
            "subscribers": full.full_chat.participants_count,
            "posts_count": len(posts),
        }
        with open(STATS_JSON, "w", encoding="utf-8") as f:
            json.dump(stats, f, ensure_ascii=False, indent=2)
        print(f"Stats updated: {stats['subscribers']} subscribers, {stats['posts_count']} posts")
    except Exception as e:
        print(f"Error updating stats: {e}")


async def stats_loop(client, channel_entity):
    """Periodically update stats."""
    while True:
        await update_stats(client, channel_entity)
        await asyncio.sleep(STATS_INTERVAL)


async def main():
    client = TelegramClient(SESSION_FILE, API_ID, API_HASH)
    await client.start()

    channel_entity = await client.get_entity(CHANNEL)
    print(f"Watching @{CHANNEL} for new posts...")

    # Initial stats update + SEO generation
    await update_stats(client, channel_entity)
    posts = load_posts()
    if posts:
        generate_sitemap(posts)
        inject_seo_html(posts)

    # Start periodic stats updater
    asyncio.create_task(stats_loop(client, channel_entity))

    @client.on(events.NewMessage(chats=channel_entity))
    async def handler(event):
        message = event.message
        print(f"New post #{message.id} received")

        post = {
            "id": message.id,
            "date": message.date.isoformat(),
            "text": message.text or "",
            "link": f"https://t.me/{CHANNEL}/{message.id}",
            "image": None,
            "video": None,
        }

        if message.photo:
            filename = f"post_{message.id}.jpg"
            filepath = os.path.join(MEDIA_DIR, filename)
            await message.download_media(file=filepath)
            post["image"] = f"media/{filename}"
            create_thumbnail(filepath, filename)
            print(f"  Downloaded image: {filename}")
        elif message.video:
            filename = f"post_{message.id}.mp4"
            filepath = os.path.join(MEDIA_DIR, filename)
            await message.download_media(file=filepath)
            post["video"] = f"media/{filename}"
            if message.video.thumbs:
                thumb_name = f"thumb_{message.id}.jpg"
                thumb_path = os.path.join(MEDIA_DIR, thumb_name)
                await client.download_media(message, file=thumb_path, thumb=-1)
                post["image"] = f"media/{thumb_name}"
            print(f"  Downloaded video: {filename}")

        posts = load_posts()

        existing_ids = {p["id"] for p in posts}
        if message.id not in existing_ids:
            posts.insert(0, post)
            save_posts(posts)
            print(f"  Saved. Total posts: {len(posts)}")
            # Update stats after new post
            await update_stats(client, channel_entity)
        else:
            print(f"  Post #{message.id} already exists, skipping")

    await client.run_until_disconnected()


if __name__ == "__main__":
    asyncio.run(main())
