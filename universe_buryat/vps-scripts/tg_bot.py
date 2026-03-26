#!/usr/bin/env python3
"""
Watches @universe_buryat for new posts and updates posts.json in real-time.
Runs as a systemd service.
"""

import os
import json
import asyncio
from telethon import TelegramClient, events

# === CONFIG ===
API_ID = 30908105
API_HASH = "67ed19d9d8189d34dd40c30864b5c710"
CHANNEL = "universe_buryat"

IMAGES_DIR = "/var/www/universe_buryat/images"
POSTS_JSON = "/var/www/universe_buryat/posts.json"
SESSION_FILE = "/root/telethon_session"

os.makedirs(IMAGES_DIR, exist_ok=True)


def load_posts():
    if os.path.exists(POSTS_JSON):
        with open(POSTS_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_posts(posts):
    with open(POSTS_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)


async def main():
    client = TelegramClient(SESSION_FILE, API_ID, API_HASH)
    await client.start()

    channel_entity = await client.get_entity(CHANNEL)
    print(f"Watching @{CHANNEL} for new posts...")

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
        }

        if message.photo:
            filename = f"post_{message.id}.jpg"
            filepath = os.path.join(IMAGES_DIR, filename)
            await message.download_media(file=filepath)
            post["image"] = f"images/{filename}"
            print(f"  Downloaded image: {filename}")

        posts = load_posts()

        # Avoid duplicates
        existing_ids = {p["id"] for p in posts}
        if message.id not in existing_ids:
            posts.insert(0, post)  # newest first
            save_posts(posts)
            print(f"  Saved. Total posts: {len(posts)}")
        else:
            print(f"  Post #{message.id} already exists, skipping")

    await client.run_until_disconnected()


if __name__ == "__main__":
    asyncio.run(main())
