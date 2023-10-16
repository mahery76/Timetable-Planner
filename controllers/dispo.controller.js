const pool = require("../config/dbpg")

exports.getAlldispos = async (req, res) => {
    try {
        const dispos = await pool.query(`SELECT * from "Dispos"`)
        res.json(dispos.rows)
    } catch (err) {
        console.error(err.message)
    }
}

// not taken but useful for the delete and post request
exports.getOneDispo = async (req, res) => {
    try {
        const dispotId = req.params.id
        console.log(dispotId)
        const OneDispo = await pool.query(`SELECT * FROM "Dispos" WHERE id_dispo = $1`, [dispotId])
        if (OneDispo) {
            res.json(OneDispo.rows[0]);
          } else {
            res.status(404).json({ message: 'One dispo not found' });
          }
    } catch (err) {
        console.error(err.message)
    }
}

