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
        const { id_cren, date } = req.query
        const new_date_occupation = new Date(date)
        console.log('ilay date nalefa', new_date_occupation)
        console.log('ilay cren nalefa', id_cren)

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
        const matchedOcc = (await pool.query(query,[formattedDate, id_cren])).rows

        const salleLibre = []
        salles.forEach(salle => {
            if (!matchedOcc.some(item => item.id_salle === salle.id_salle)) {
                salleLibre.push(salle)
            }
        })
        console.log('manomboka eto')
        console.table(salles)
        console.table(matchedOcc)
        console.table(salleLibre)
        res.json(salleLibre)

    } catch (err) {
        console.error(err.message)
    }
}
