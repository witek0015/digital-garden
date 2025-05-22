![[XP Data#XP Status]]
```dataviewjs
let totalXP = 0;
let folder = "Journal";


 // <- Zmień na nazwę swojego folderu z logami
let xpPerDay = {};

for (let page of dv.pages(`"${folder}"`)) {
    let date = page.file.name; // Zakładam, że nazwa pliku to data typu 2025-05-20

    if (!xpPerDay[date]) xpPerDay[date] = 0;

    for (let task of page.file.tasks || []) {
        if (task.completed) {
            let match = task.text.match(/@xp:(\d+)/);
            if (match) {
                xpPerDay[date] += parseInt(match[1]);
            }
        }
    }
}

// Zamień obiekt w tablicę i posortuj
let sorted = Object.entries(xpPerDay)
    .sort((a, b) => b[0].localeCompare(a[0])) // DESC
    .slice(0, 30);

dv.table(["📅 Dzień", "🧠 XP"], sorted);

```


