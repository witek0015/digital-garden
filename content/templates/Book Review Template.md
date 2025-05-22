<%* 
// Prompt the user for the subject
let title = await tp.system.prompt("Enter book title");
let author = await tp.system.prompt("Enter book author");
let period = await tp.system.prompt("Enter literary period")
// Insert the subject into the YAML frontmatter
tR += `---
Author: ${author}
Title: ${title}
Date: ${tp.date.now("YYYY-MM-DD")}
Period: ${period}
tags: ${period}
---
`;
let name = `${tp.date.now("YYYY")} 📚 ${title}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name);
%>
# Context
- 

# Highlights
-