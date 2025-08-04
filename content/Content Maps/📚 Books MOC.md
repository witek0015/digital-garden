---
aliases:
  - Books
tags: []
modified: 2025-05-25
---
```meta-bind-button
label: New Book
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: templates/Book Review Template.md
    folderPath: sources/Books
    fileName: Book Name
    openNote: true

```

# Template
- [[Book Review Template]]

# Books
```dataview
TABLE title, author, tags
FROM "sources/Books"
SORT Title ASC
```