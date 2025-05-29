<%* 
// Prompt the user for the subject
let title = await tp.system.prompt("Enter topic");
let tags = await tp.system.prompt("Enter tags");
// Insert the subject into the YAML frontmatter
tR += `---
title: ${title}
Date: ${tp.date.now("YYYY-MM-DD")}
tags: ${tags}
---
`;
let name = `${tp.date.now("YYYY-MM-DD")} ✍️ ${title}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name);
%>

### Sources
