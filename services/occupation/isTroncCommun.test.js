const persons1 = [
    {
        name: 'mahery',
        friends: ['g0001', 'g0002']
    },
    {
        name: 'mirana',
        friends: ['g0002', 'g0001']
    },
    {
        name: 'mirado',
        friends: ['g0003', 'g0001']
    },
]
const persons2 = [
    {
        name: 'mitia',
        friends: ['g0001', 'g0003']
    },
    {
        name: 'mitia',
        friends: ['g0006']
    },
]

const isCommon = (person, persons2) => {
    const isTroncCommun = persons2.find((item) => (
        item.friends.sort() === person.friends.sort()
    ))
    return isTroncCommun
}

for (const person of persons){
    if(isCommon(person, persons2)){
        console.log(person)
    }
}
