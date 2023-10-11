const pool = require("../../config/dbpg")
const isSameDay = require("../../functions/isSameDay")
const noRoomSlotDuplicate = require("./10_noRoomSlotDuplicate")

const getRoom = async () => {

    const noRoomSlotDuplicateOccupation = await noRoomSlotDuplicate()
    const Salles = (await pool.query(`SELECT * FROM "Salles"  ORDER BY capacite`)).rows

    console.table(noRoomSlotDuplicateOccupation)
    console.table(Salles)

    const occupationWithRoom = []

    const isSameRoom = (occupation, occupationWithRoom) => {
        const { id_cren, id_salle, date_dispo, id_tronc_commun } = occupation
        const isSameRoom = occupationWithRoom.some(item => (
            isSameDay(item.date_dispo, date_dispo) &&
            item.id_cren === id_cren &&
            item.id_salle === id_salle &&
            (
                (item.id_tronc_commun !== id_tronc_commun)
                ||
                (id_tronc_commun === null && item.id_tronc_commun === null)
            )
        ))
        return (isSameRoom)
    }

    for (const occupation of noRoomSlotDuplicateOccupation) {
        if (occupation.id_salle !== null) {
            occupationWithRoom.push(occupation)
        }
        else {
            for (let i = 0; i < Salles.length; i++) {
                if (occupation.effectif <= Salles[i].capacite) {
                    occupation["id_salle"] = Salles[i]["id_salle"]
                    if(!isSameRoom(occupation, occupationWithRoom)){
                        occupationWithRoom.push(occupation)
                        break;
                    }
                } 
            }
        }
    }
    return occupationWithRoom

}
const f = async () => {
    let res = await getRoom()
    await pool.end()
    console.table(res)
}
f()
module.exports = getRoom