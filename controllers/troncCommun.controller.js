const pool = require("../config/dbpg")
exports.getAllTroncCommun = async (req, res) => {
    try {
        const TC = await pool.query(`SELECT * FROM "Tronc_communs" order by id_tronc_commun`)
        res.json(TC.rows)
    } catch (err) {
        console.error(err.message)
    }
}