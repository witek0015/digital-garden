# XP Status
```dataviewjs
let totalXP = 0;
let folder = "Journal";

for (let page of dv.pages(`"${folder}"`)) {
  for (let task of page.file.tasks.where(t => t.completed)) {
    const match = task.text.match(/@xp:(-?\d+)/);
    if (match) totalXP += parseInt(match[1]);
  }
}
let xpSpent = 0;

// Wczytaj plik z logiem zakupów
for (let page of dv.pages('"Spaces/Productivity/XP Shop"')) {
  for (let task of page.file.tasks || []) {
    if (task.completed) {
      let match = task.text.match(/@xp:(\d+)/);
      if (match) {
        xpSpent += parseInt(match[1]); // match[1] zawiera np. "-60"
      }
    }
  }
}

let xpAvailable = totalXP - Math.abs(xpSpent); // odejmujemy bezwzględną wartość

dv.paragraph(`
🧠 **XP Total:** ${totalXP}  
💸 **XP Spent:** ${Math.abs(xpSpent)}  
✅ **XP Available:** ${xpAvailable}
`);
```
# Roadmap
```dataviewjs
let totalXP = 0;
let folder = "Journal";

for (let page of dv.pages(`"${folder}"`)) {
  for (let task of page.file.tasks.where(t => t.completed)) {
    const match = task.text.match(/@xp:(\d+)/);
    if (match) totalXP += parseInt(match[1]);
  }
}
let levels = [
  { level: 1, xp: 0, reward: "Start" },
  { level: 2, xp: 50, reward: "" },
  { level: 3, xp: 150, reward: "Class choice " },
  { level: 4, xp: 300, reward: "" },
  { level: 5, xp: 450, reward: "🧩 Token Flow" },
  { level: 6, xp: 600, reward: "🔁 Plan A/Plan B" },
  { level: 7, xp: 750, reward: "💪 Concentration armor" },
  { level: 8, xp: 900, reward: "📆 Iron Discipline" },
  { level: 9, xp: 1050, reward: "💼 Godly Planner" },
  { level: 10, xp: 1300, reward: "🏆 Checklist Tzar" },
];

let currentLevel = levels.filter(l => totalXP >= l.xp).pop();
let nextLevel = levels.find(l => totalXP < l.xp);

dv.paragraph(`🎮 **Your Level:** Lv.${currentLevel.level}`);
dv.paragraph(`🔓 **Reward:** ${currentLevel.reward || "brak"}`);
dv.paragraph(`📈 **XP to Level Up:** ${nextLevel ? nextLevel.xp - totalXP : "MAX LEVEL"}`);
```
| Poziom | Próg XP | Nagroda     |
| ------ | ------- | ----------- |
| Lv.1   | 0       | Start       |
| Lv.2   | 50      |             |
| Lv.3   | 150     | Class choice |
| Lv.4   | 300     |             |
| Lv.5   | 450     | 🧩 Token Flow       |
| Lv.6   | 600     | 🔁 Plan A/Plan B       |
| Lv.7   | 750     | 💪 Concentration armor      |
| Lv.8   | 900     |   📆 Iron Discipline       |
| Lv.9   | 1050    | 💼 Godly Planner   |
| Lv.10  | 1300    | 🏆 Checklist Tzar   |

## My Class

**Style:** checklist, rhythm, planning  
**Activated:** Lv.3

### ✅ Class bonuses:
- +5 XP for 100% realisation
- 1x day rest without penalty per 2 weeks

### 🌳 Perks:
- [ ] 🧩 Token Flow	(Lv.5)	
	+10 minutes to each block
- [ ] 🔁 Plan A/Plan B (Lv.6) 
	propose alternative day plan - if realised in 50%, gain 50% of main XP
- [ ] 💪 Concentration armor (Lv.7) 
	once a day, when you ignore a distraction gain +10 XP
- [ ] 📆 Iron Discipline (Lv.8) 
	once a day, you can lock in on a task for more than 1h, getting additional 15 XP, and an addition 5 XP if you did not pick up any distractions. 
- [ ] 💼 Godly Planner (Lv.9) 
	once a month, set up a Holy Week of Planning, getting a 10% boost for the whole week (rounded up)
- [ ] 🏆 Checklist Tzar (Lv.10)
	pick an addtional class, you can create a perk every level