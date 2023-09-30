const { sq } = require("../config/db")
const Salles = require("../models/Salle")
sq.query("ALTER SEQUENCE salles_id_seq RESTART WITH 1;")

const insertSalle = async () => {

    // delete all records before inserting
    await Salles.destroy({ truncate: true, cascade: true })
    const roomdata = [
        ["Salle A",50],
        ["Salle B" ,50],
        ["Labo info",50],
        ["Grande Salle",70],
        ["Salle C",30],
        ["Salle D",30],
        ["Salle E",30],
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