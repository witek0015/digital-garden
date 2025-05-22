<%* 
// Prompt the user for the subject
let year = await tp.system.prompt("Year published");
let name = await tp.system.prompt("Title of Article (Remove special signs)");
let date = tp.date.now("YYYY-MM-DD")
// Insert the subject into the YAML frontmatter
tR += `---
Authors:
Title: ${name}
Year: ${year}
Journal:
Issue:
Number:
URL:
Date: ${date}
tags: 
---`;
let name2 = `${year} 🎓 ${name}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name2);
%>
# Notes
- 

# Highlights
-
