const pool = require("../../config/dbpg")
const get_occupations_filtered = require("./9_occupation_filtered")
const getRoomOccupation = async () => {
    const occupationBrute = await get_occupations_filtered()
    const Salles = (await pool.query(`SELECT * FROM "Salles" ORDER BY id_salle`)).rows
    const Slots = (await pool.query(`SELECT * FROM "Creneaus" ORDER BY id_cren`)).rows

    let occupationWithRoom = [...occupationBrute]

    let sallesCreneaus = []
    Slots.forEach((slot) => {
        Salles.forEach((salle) => {
            sallesCreneaus.push(
                {
                    id_cren: slot.id_cren,
                    id_salle: salle.id_salle,
                    capacite: salle.capacite,
                    isTaken: false,
                }
            )
        })
    })
    console.table(sallesCreneaus)

    return occupationWithRoom
}
const f = async () => {
    let res = await getRoomOccupation()
    await pool.end()
    console.table(res)
}
f()
module.exports = getRoomOccupation