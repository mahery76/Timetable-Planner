
let table1 = [
    { apple: 1, peach: 1, state: 0 },
    { apple: 1, peach: 2, state: 0 },
    { apple: 1, peach: 3, state: 0 },
    { apple: 1, peach: 4, state: 0 },
    { apple: 2, peach: 1, state: 0 },
    { apple: 2, peach: 2, state: 0 },
    { apple: 2, peach: 3, state: 0 },
    { apple: 2, peach: 4, state: 0 },
]


const updatedTable1 = [...table1]; // Create a copy of the original array

let tocompare = table1[0]
let count = 0
for (let i = 0; i < updatedTable1.length; i++) {
    let compared = updatedTable1[i];

    if(tocompare['apple'] === compared['apple']){
        count = count + 1
    }

    else if(tocompare['apple'] !== compared['apple']){
        count = 1
        tocompare = compared
    }

    compared["count"] = count 
}

console.table(updatedTable1)
