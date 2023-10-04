const pool = require("../../config/dbpg")
const get_occupations_filtered = require("./9_occupation_filtered")
const getRoomOccupation = async () => {
    const occupationBrute = await get_occupations_filtered()
    const Salles = (await pool.query(`SELECT * FROM "Salles"  ORDER BY capacite`)).rows
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
    // il faut marquer en avance comme pris la salle a un creneau avec les occupations  
    occupationWithRoom.forEach((occupation) => {
        if (occupation.id_salle !== null) {
            for (let i = 0; i < sallesCreneaus.length; i++) {
                const salleCreneau = sallesCreneaus[i]
                if (
                    salleCreneau["isTaken"] === false &&
                    occupation.id_cren === salleCreneau.id_cren &&
                    occupation.id_salle === salleCreneau.id_salle
                ) {
                    salleCreneau["isTaken"] = true
                    break
                }
            }
        }
    })
    occupationWithRoom.forEach((occupation) => {
        // si une occupaion n'as pas encore un salle
        if (occupation.id_salle === null) {
            // Find a salleCreneau that is not taken, matches the occupation's cren, and has enough capacity
            const suitableSalleCreneau = sallesCreneaus.find(salleCreneau =>
                (!salleCreneau.isTaken || (salleCreneau.isTaken && salleCreneau.id_tronc_commun === occupation.id_tronc_commun)) &&
                occupation.id_cren === salleCreneau.id_cren && 
                occupation.effectif <= salleCreneau.capacite 
            );
            // If a suitable salleCreneau is found
            if (suitableSalleCreneau) {
                // Assign the salle to the occupation and mark the salleCreneau as taken
                occupation.id_salle = suitableSalleCreneau.id_salle;
                suitableSalleCreneau.isTaken = true;
                suitableSalleCreneau.id_tronc_commun = occupation.id_tronc_commun;
            }
        }
    })
    // console.table(Salles)
    // console.table(Slots)
    // console.table(sallesCreneaus)

    return occupationWithRoom
}
// const f = async () => {
//     let res = await getRoomOccupation()
//     await pool.end()
//     console.table(res)
// }
// f()
module.exports = getRoomOccupation


