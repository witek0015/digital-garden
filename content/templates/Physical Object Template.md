<%*
let title = await tp.system.prompt("What was it?");
let purchased = await tp.system.prompt("Date of purchase");
let guarantee = await tp.system.prompt("How long is the guarantee?");
let price = await tp.system.prompt("What was the price?");
let URL = await tp.system.prompt("Paste URL");

// Fix date formatting here
let currentDate = tp.date.now("YYYY-MM-DD");
let year = tp.date.now("YYYY");

// Build the frontmatter
let frontmatter = `---
Purchased: ${purchased}
Price: ${price}
Guarantee: ${guarantee}
URL: ${URL} 
---
tags: [[📺 Physical Objects MOC]]

`;

tR += frontmatter;

// File name to rename to
let name = `${year}📺${title}`;
await tp.file.rename(name);
%>

# Specs
- 

## Related items
- 

# Notes
- 
