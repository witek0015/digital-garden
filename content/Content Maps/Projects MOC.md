---
aliases:
  - Projects
tags:
  - RPubChem
  - MSc
  - Codex
  - Server
  - AllIn
modified: 2025-05-28
---
```meta-bind-button
label: New Project Note
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: templates/Project Template.md
    folderPath: Projects
    fileName: Day
    openNote: true

```
# Template
- [[Project Template]]

# Project Notes
```dataview
table Project, Date
FROM "Projects"
SORT Project ASC
```