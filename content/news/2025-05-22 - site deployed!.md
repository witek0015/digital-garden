---
publish: "true"
description: After fighting Windows, symlinks, SSH keys, and cursed build tools… it’s finally alive.
tags:
  - news
  - website
date: 2025-05-22
---
After several days of glorious suffering in the trenches of Windows Terminal, GitHub Actions, and Quartz’s picky build system, this site is finally up and running.

Highlights of the deployment war:

- ❌ **Symlink?** Denied by Windows like a medieval gatekeeper.
- 🧱 **OneDrive folders?** Betrayed me with hidden permissions.
- 🔐 **SSH keys?** Refused to talk to GitHub like an angsty teenager.
- 🪦 **Simple-git native module?** Missing on Linux runners. RIP `@napi-rs/simple-git-linux-x64-gnu`.
- 💀 **EPERM, ENOENT, and friends?** Oh, they came to party.

But with enough `rm -rf public/`, ritual cache purges, and a sprinkling of desperation, the garden has bloomed.

Although the site itself is still during it's baby crawl stage, I intend to bring some stuff from my personal notes up to speed with this new power that I've unlocked. 

Seeya! Stay tuned,
Wiktor

P.S. Anyone who actually sees this - apologies for the sorry current state of acutal content - working on it 🫡