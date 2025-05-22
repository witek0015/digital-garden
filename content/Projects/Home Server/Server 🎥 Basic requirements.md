---
Project: Server
Date: 2025-05-05
Tags: [Server]
---
# Hardware

|Component|Why You Need It|
|---|---|
|**Raspberry Pi 4 (8 GB)**|The main brain. 8 GB is great for multitasking.|
|**Official USB-C Power Supply (5.1V, 3A)**|No power? No party. Stable voltage = no crashes.|
|**Storage (SSD via USB 3.0)**|SD card works but SSD is faster and lasts longer.|
|**Cooling (Heatsink or Fan Case)**|Keeps your Pi from turning into fried plantains under load.|
|**Ethernet Cable (RJ45)**|Connects to router = fast, stable network. Wi-Fi is plan B.|
|**Optional UPS (Uninterruptible Power Supply)**|Protects against outages if you're serious.|

# Software
|Software|Purpose|
|---|---|
|**Raspberry Pi OS Lite / Ubuntu Server**|Lightweight OS = more room for your server tasks.|
|**SSH**|Remote control without plugging in monitor.|
|**Docker & Docker Compose** (Optional but 🔥)|Clean way to manage multiple services.|
|**Samba / NFS / Nextcloud**|For file sharing.|
|**Pi-hole**|Block ads like a digital vigilante.|
|**MediaWiki / Wiki.js**|For your DnD knowledge hoarding.|
|**Syncthing / rsync / Borg**|For backups across devices.|
|**Optional Game Servers**|Like Minecraft Bedrock or Factorio – but turn off when idle.|

# Setup
## 1. **Download & Flash Raspberry Pi OS Lite**
### **Download**
- Go to https://www.raspberrypi.com/software  
- Download & install **Raspberry Pi Imager**
### **Flash with Config**
1. Open Raspberry Pi Imager 
2. **Choose OS**: `Raspberry Pi OS Lite (64-bit)`
3. **Choose Storage**: your microSD card or SSD  
4. Click **Advanced Settings** (or press `Ctrl+Shift+X`)
    - Enable **SSH** 
    - Set hostname: e.g., `rpi-server`
    - Set username & password (DON’T skip this)
    - Set Wi-Fi SSID/pass if needed (but use Ethernet if possible)
5. Click **Write** → wait for flash to finish
## 2. **Boot Up the Pi**
1. Insert the card/SSD into your Pi
2. Plug in Ethernet (recommended)
3. Connect power – **your Pi is now alive!**
## 3. **Connect via SSH**
From your main computer:
>[!bash]
ssh pi@rpi-server.local

or if `.local` doesn’t work, use your router to find the Pi’s IP.
Example:

>[!bash]
ssh pi@192.168.1.42

Enter the password you set earlier.

## 4. **Update & Upgrade System**
>[!bash]
sudo apt update && sudo apt full-upgrade -y

After update:
>[!bash]
sudo reboot

Reconnect via SSH afterward.
## 5. **Change Password (if not already)**
>[!bash]
passwd
## 6. **Enable SSH on Boot (double check)**
>[!bash]
sudo systemctl enable ssh

## 7. **(Optional) Set Static IP Address**
>[!bash]
sudo nano /etc/dhcpcd.conf

Add at the bottom (adjust IPs to match your network):

>[!bash]
interface eth0 static ip_address=192.168.1.42/24 static routers=192.168.1.1 static domain_name_servers=192.168.1.1

Save (`Ctrl+O`, `Enter`, `Ctrl+X`) and reboot:

>[!bash]
sudo reboot

## 8. **(Optional) Add Basic Security**
>[!bash]
sudo apt install ufw fail2ban -y sudo ufw allow ssh sudo ufw enable

## 9. **(Optional) Create Folder Structure for Later**
>[!bash]
mkdir -p ~/services/{files,wiki,backup,adblock,games} mkdir -p ~/data/{downloads,media,docs}

# Side notes
**Power**
The system will consume 4.32 kWh monthly on average (6-7 zl)