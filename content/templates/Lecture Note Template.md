<%* 
// Prompt the user for the subject
let subject = await tp.system.prompt("Enter the subject (Use one word)");

// Insert the subject into the YAML frontmatter
tR += `---
Subject: ${subject}
Date: ${tp.date.now("YYYY-MM")}
Tags: [${subject}]
---
`;
let name = `${subject} 📝 ${tp.date.now("YYYY-WW")}`;
// Rename the file to the subject after setting frontmatter
await tp.file.rename(name);
%>
# Summary:

## Lab notes:

## Lecture notes:

