<%* 
// Prompt the user for the subject
let title = await tp.system.prompt("Enter book title");
let author = await tp.system.prompt("Enter book author");
let period = await tp.system.prompt("Enter literary period and genre")
// Insert the subject into the YAML frontmatter
tR += `---
Author: ${author}
title: ${title}
Date: ${tp.date.now("YYYY-MM-DD")}
Period: ${period}
tags: ${period} literature review
---
*${author}*`;
let name = `${tp.date.now("YYYY")} 📚 ${title}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name);
%>
### Review
Soon!
### Context

