<%*
let title = await tp.system.prompt("Source title (e.g. valero2014)");
let dopant = await tp.system.prompt("Dopant element (e.g. Cu, Fe, Ag)");
let synthesis = await tp.system.prompt("Synthesis method (e.g. sol-gel, impregnation)");
let testing = await tp.system.prompt("Testing method (e.g. H2 evolution, dye degradation)");
let year = await tp.system.prompt("Publication year");

tR += `---
Title: ${title}
tags: MScSource
Year: ${year}
Dopant: ${dopant}
Synthesis_method: ${synthesis}
Testing_method: ${testing}
---

# 📕 PDF
[[${title}.pdf]]
`;

await tp.file.rename(`${title}`);
-%>

# 🧠 Summary / Notes

## 🔗 Links
- [[Source Database]]


