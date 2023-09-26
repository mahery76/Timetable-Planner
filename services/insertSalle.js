const { sq } = require("../config/db")
const Salles = require("../models/Salle")
sq.query("ALTER SEQUENCE salles_id_seq RESTART WITH 1;")

const insertSalle = async () => {

    // delete all records before inserting
    await Salles.destroy({ truncate: true, cascade: true })
    const roomdata = [
        ["TCO",20, "g0001"],
        ["GI",25 , "g0002"],
        ["BTP",35, "g0003"],
        ["ECO",22, "g0004"],
    ]
    const insertoneRoom = async (a, b, c) => {
        await Salles.create({
            nom_salle: a, 
            capacite: b, 
            id_classe: c
        })
    }
    roomdata.forEach(async(room) => {
        insertoneRoom(room[0], room[1], room[2])
    })

}
module.exports = insertSalle