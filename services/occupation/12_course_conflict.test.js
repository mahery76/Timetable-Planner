let table1 = [
    { course: 1, group: 1, slot: 1},
    { course: 1, group: 2, slot: 2},
    { course: 1, group: 3, slot: 3},
    { course: 1, group: 4, slot: 4},
    { course: 2, group: 1, slot: 1},
    { course: 2, group: 2, slot: 1},
    { course: 2, group: 3, slot: 1},
    { course: 2, group: 4, slot: 1},
    { course: 3, group: 1, slot: 1},
    { course: 3, group: 2, slot: 1},
    { course: 3, group: 3, slot: 1},
    { course: 3, group: 4, slot: 1},
]

const uniqueTable1 = [];
for (let i = 0; i < table1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueTable1.length; j++) {
        console.log(true)
        if (
            table1[i].course !== uniqueTable1[j].course &&
            table1[i].group === uniqueTable1[j].group &&
            table1[i].slot === uniqueTable1[j].slot
        ) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueTable1.push(table1[i]);
    }
}

console.table(uniqueTable1);