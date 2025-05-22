---
tags:
  - MSc
Project: MSc
---
# 📚 Source Database – Master Thesis

>[!tip] 🧠 This is your master list of all source notes used for the thesis.  
Use the button below to add a new reference note and keep this bad boy organized.

```meta-bind-button
label: New PDF
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: templates/MSc Template.md
    folderPath: Projects/Master Thesis/Notes
    fileName: New Note
    openNote: true

```
# 📚 Source List
```dataview
table Dopant, Synthesis_method, Testing_method, Year
from "Projects/Master Thesis/Notes"
where contains(tags, "MScSource")
sort Dopant desc
```