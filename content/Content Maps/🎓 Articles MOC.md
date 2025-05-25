---
aliases:
  - Articles
/tags:
  - Astronomy
  - Chemistry
  - Computers
  - Medicine
  - Music
  - Politics
  - Economics
  - Games
  - Linguistics
  - Physics
  - Psychology
  - History
  - Philosophy
modified: 2025-05-23
---
```meta-bind-button
label: New Article
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: templates/Article Review Template.md
    folderPath: sources/Articles
    fileName: Article Name
    openNote: true

```

# Template
- [[Article Review Template]]

# Books
```dataview
TABLE Year, Authors, Journal, tags
FROM "sources/Articles"
SORT date DESC
```