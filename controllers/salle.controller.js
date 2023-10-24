const pool = require("../config/dbpg")
exports.getAllSAlle = async (req, res) => {
    try {
        const salles = await pool.query(`SELECT * FROM "Salles" order by capacite`)
        res.json(salles.rows)
    } catch (err) {
        console.error(err.message)
    }
}