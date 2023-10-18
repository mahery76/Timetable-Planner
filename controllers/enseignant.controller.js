const pool = require("../config/dbpg")

exports.getAllEnseignant = async (req, res) => {
    try {
        const enseignants = await pool.query(`SELECT * FROM "Enseignants" order by id_ens`)
        res.json(enseignants.rows)
    } catch (err) {
        console.error(err.message)
    }
}

exports.getOneEnseignant = async (req, res) => {
    try {
        const enseignantId = req.params.id
        const OneEnseignant = await pool.query(`SELECT * FROM "Enseignants" WHERE id_ens = $1`, [enseignantId])
        if (OneEnseignant) {
            res.json(OneEnseignant.rows[0]);
          } else {
            res.status(404).json({ message: 'OneEnseignant not found' });
          }
    } catch (err) {
        console.error(err.message)
    }
}






