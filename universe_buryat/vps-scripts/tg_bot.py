#!/usr/bin/env python3
"""
Watches @universe_buryat for new posts and updates posts.json in real-time.
Also periodically updates stats.json with subscriber count.
Runs as a systemd service.
"""

import os
import json
import asyncio
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

os.makedirs(MEDIA_DIR, exist_ok=True)


def load_posts():
    if os.path.exists(POSTS_JSON):
        with open(POSTS_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_posts(posts):
    with open(POSTS_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)


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

    # Initial stats update
    await update_stats(client, channel_entity)

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
