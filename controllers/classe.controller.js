const pool = require("../config/dbpg")

exports.getAllGroup = async (req, res) => {
    try {
        const groups = await pool.query(`SELECT * FROM "Classes"`)
        res.json(groups.rows)
    } catch (err) {
        console.error(err.message)
    }
}

exports.getOneGroup = async (req, res) => {
    try {
        const id_classe = req.params.id
        const oneClasse = await pool.query(`SELECT * FROM "Classes" WHERE id_classe = $1`, [id_classe])
        if (oneClasse) {
            res.json(oneClasse.rows[0]);
          } else {
            res.status(404).json({ message: 'oneClasse not found' });
          }
    } catch (err) {
        console.error(err.message)
    }
}






