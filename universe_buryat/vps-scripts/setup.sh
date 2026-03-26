#!/bin/bash
# =============================================
# VPS Setup Script for Universe Buryat
# Run on VPS: bash setup.sh
# =============================================
set -e

echo "=== 1. Updating system ==="
apt update && apt upgrade -y
apt install -y nginx python3 python3-pip git

echo "=== 2. Installing Python libraries ==="
pip3 install telethon python-telegram-bot requests --break-system-packages

echo "=== 3. Setting up web directory ==="
mkdir -p /var/www/universe_buryat/images

echo "=== 4. Cloning repository ==="
cd /tmp
rm -rf chimitdorzhi
git clone https://github.com/CHIMITDORZHI-STUDIO-WEB/chimitdorzhi.git
cp /tmp/chimitdorzhi/universe_buryat/* /var/www/universe_buryat/
echo "Site files copied to /var/www/universe_buryat/"

echo "=== 5. Installing scripts ==="
cp /tmp/chimitdorzhi/universe_buryat/vps-scripts/download_history.py /root/download_history.py
cp /tmp/chimitdorzhi/universe_buryat/vps-scripts/tg_bot.py /root/tg_bot.py

echo "=== 6. Configuring nginx ==="
cp /tmp/chimitdorzhi/universe_buryat/vps-scripts/nginx-universe-buryat.conf /etc/nginx/sites-available/universe_buryat
ln -sf /etc/nginx/sites-available/universe_buryat /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
echo "Nginx configured and running"

echo "=== 7. Running download_history.py ==="
echo "NOTE: Telethon will ask for phone number on first run."
echo "Run manually: python3 /root/download_history.py"
echo ""

echo "=== 8. Setting up systemd service ==="
cp /tmp/chimitdorzhi/universe_buryat/vps-scripts/tg-bot.service /etc/systemd/system/tg-bot.service
systemctl daemon-reload
systemctl enable tg-bot
echo "Service installed. Start after authorization:"
echo "  systemctl start tg-bot"
echo ""

echo "============================================"
echo "  SETUP COMPLETE!"
echo "============================================"
echo ""
echo "Next steps:"
echo "  1. Run: python3 /root/download_history.py"
echo "     (will ask for phone number for Telethon auth)"
echo "  2. After auth, wait for download to complete"
echo "  3. Start the watcher: systemctl start tg-bot"
echo "  4. Check site: http://8d4a125849ec.vps.myjino.ru"
echo ""
