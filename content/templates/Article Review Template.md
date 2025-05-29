<%* 
// Prompt the user for the subject
let author = await tp.system.prompt("Author");
let year = await tp.system.prompt("Year published");
let name = await tp.system.prompt("Title of Article (Remove special signs)");
let date = tp.date.now("YYYY-MM-DD");
let journal = await tp.system.prompt("Name of the journal");
let issue = await tp.system.prompt("Issue");
let number = await tp.system.prompt("Number");
let url = await tp.system.prompt("URL");
let tags = await tp.system.prompt("tags");
tR += `---
Authors:${author}
title: ${name.toLowerCase()}
Year: ${year}
Journal: ${journal}
Issue: ${issue}
Number: ${number}
URL: ${url}
Date: ${date}
tags: 
---
*${author}*
${journal} ${issue}(${number})`;
let name2 = `${year} 🎓 ${name}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name2);
%>
### notes
- 

### highlights
-

### thoughts
