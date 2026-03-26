#!/usr/bin/env python3
"""
Download all posts from @universe_buryat since March 16, 2026.
Saves text, images, dates, and links to posts.json
"""

import os
import json
import asyncio
from datetime import datetime, timezone
from telethon import TelegramClient

# === CONFIG ===
API_ID = 30908105
API_HASH = "67ed19d9d8189d34dd40c30864b5c710"
CHANNEL = "universe_buryat"
SINCE_DATE = datetime(2026, 3, 16, tzinfo=timezone.utc)

IMAGES_DIR = "/var/www/universe_buryat/images"
POSTS_JSON = "/var/www/universe_buryat/posts.json"
SESSION_FILE = "/root/telethon_session"

os.makedirs(IMAGES_DIR, exist_ok=True)


async def main():
    client = TelegramClient(SESSION_FILE, API_ID, API_HASH)
    await client.start()

    print(f"Connected. Downloading posts from @{CHANNEL} since {SINCE_DATE.date()}...")

    posts = []
    async for message in client.iter_messages(CHANNEL, reverse=True, offset_date=SINCE_DATE):
        if message.date < SINCE_DATE:
            continue

        post = {
            "id": message.id,
            "date": message.date.isoformat(),
            "text": message.text or "",
            "link": f"https://t.me/{CHANNEL}/{message.id}",
            "image": None,
        }

        # Download photo if present
        if message.photo:
            filename = f"post_{message.id}.jpg"
            filepath = os.path.join(IMAGES_DIR, filename)
            await message.download_media(file=filepath)
            post["image"] = f"images/{filename}"
            print(f"  [IMG] Post #{message.id}: {filename}")
        else:
            print(f"  [TXT] Post #{message.id}")

        posts.append(post)

    # Sort by date descending (newest first)
    posts.sort(key=lambda p: p["date"], reverse=True)

    with open(POSTS_JSON, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)

    print(f"\nDone! Saved {len(posts)} posts to {POSTS_JSON}")
    await client.disconnect()


if __name__ == "__main__":
    asyncio.run(main())
