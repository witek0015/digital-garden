---
aliases:
  - Daily Notes
tags:
  - 📓2024
  - 📓2025
---
```meta-bind-button
label: New Daily Note
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: templates/Daily Note Template.md
    folderPath: Journal
    fileName: Day
    openNote: true

```

# Template
- [[Daily Note Template]]

# Daily Notes
```dataview
table Mood, Gym
FROM "Journal"
SORT Date DESC
```
