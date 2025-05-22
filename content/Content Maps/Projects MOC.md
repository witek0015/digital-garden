---
aliases:
  - Projects
tags:
  - RPubChem
  - MSc
  - Codex
  - Server
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

# Lecture Notes
```dataview
table Project, Date
FROM "Projects"
SORT name ASC
```