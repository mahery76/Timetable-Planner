const pool = require("../../config/dbpg")
const get_occupations_filtered = require("./9_occupation_filtered")
const getRoomOccupation = async () => {
    const occupationWithoutRoom = await get_occupations_filtered()
    const Salles = (await pool.query(`SELECT * FROM "Salles"  ORDER BY capacite`)).rows
    
    console.table(occupationWithoutRoom)
    console.table(Salles)
    const occupationWithroom = []

    //filtre room
    const isSameRoom = (occupation, occupationWithoutRoom){

    }

    for (const occupation of occupationWithoutRoom){
        if(
            !isSameRoom(occupation)
        ){
            occupationWithroom.push(occupation)
        }
    }

    return occupationWithRoom
}
const f = async () => {
    let res = await getRoomOccupation()
    await pool.end()
    console.table(res)
}
f()
module.exports = getRoomOccupation


