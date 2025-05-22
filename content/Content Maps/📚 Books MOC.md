---
aliases:
  - Books
tags:
  - Victorianism
  - Postmodernism
  - Modernism
  - Contemporary
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
    folderPath: sources/books
    fileName: Book Name
    openNote: true

```

# Template
- [[Book Review Template]]

# Books
```dataviewjs
TABLE Title, Author, Period
FROM "sources/books"
SORT Title ASC
```