const pool = require("../config/dbpg")
const isSameDay = require("../functions/isSameDay")
exports.getAllSAlle = async (req, res) => {
    try {
        const salles = await pool.query(`SELECT * FROM "Salles" order by capacite`)
        res.json(salles.rows)
    } catch (err) {
        console.error(err.message)
    }
}
exports.getSalleLibre = async (req, res) => {
    try {
        const { id_cren, date, id_tronc_commun } = req.query
        const new_date_occupation = new Date(date)
        console.log('ilay date nalefa', new_date_occupation)
        console.log('ilay cren nalefa', id_cren)
        console.log('ilay tc nalefa', id_tronc_commun)

        const salles = (await pool.query(`SELECT * FROM "Salles"`)).rows

        // const query = `
        // SELECT * FROM "Occupations"
        // `
        // const OccSameCren = (await pool.query(query)).rows
        // const matchedOcc = OccSameCren.filter((item) => (
        //     isSameDay(item.date_occupation, new_date_occupation)&&
        //     item.id_cren === id_cren
        // ))

        const formattedDate = new_date_occupation.toISOString().split('T')[0]
        const query = `
        SELECT * FROM "Occupations"
        WHERE DATE("Occupations".date_occupation) = $1 AND
        "Occupations".id_cren = $2
        `
        const matchedOcc = (await pool.query(query, [formattedDate, id_cren])).rows
        const salleLibre = []
        const salleTroncCommun = []
        for (let i = 0; i < salles.length; i++) {
            if (matchedOcc.some(item => (
                item.id_tronc_commun !== null &&
                item.id_tronc_commun === id_tronc_commun &&
                item.id_salle === salles[i].id_salle
            ))) {
                salleTroncCommun.push(salles[i])
            }
        }
        for (let i = 0; i < salles.length; i++) {
            if (
                !matchedOcc.some(item => (
                    (item.id_tronc_commun === null || item.id_tronc_commun !== id_tronc_commun) 
                    &&
                    item.id_salle === salles[i].id_salle
                ))
            ) {
                salleLibre.push(salles[i])
            }
        }
        console.log('manomboka eto')
        console.table(salles)
        console.table(matchedOcc)
        console.table(salleLibre)
        console.table(salleTroncCommun)
        if(salleTroncCommun.length > 0){
            res.json(salleTroncCommun)
        }
        else{
            res.json(salleLibre)
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

