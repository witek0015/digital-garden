<%* 
// Prompt the user for the subject
let project = await tp.system.prompt("Enter the project (Use one word)");

// Insert the subject into the YAML frontmatter
tR += `---
Project: ${project}
Date: ${tp.date.now("YYYY-MM-DD")}
Tags: [${project}]
---

`;
let name = `${project} 🎥 ` + await tp.system.prompt("Enter project note's name (no special signs)");
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name);
%>
