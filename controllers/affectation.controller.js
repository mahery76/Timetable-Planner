const pool = require("../config/dbpg")

exports.getTeacherAffectation = async (req, res) => {
    try {
        const id_ens = req.params.id
        const teacherAffectations = await pool.query(`SELECT * FROM "Affectations" WHERE id_ens = $1`, [id_ens])
        res.json(teacherAffectations.rows)
    } catch (err) {
        console.error(err.message)
    }
}
exports.getGroupAffectation = async (req, res) => {
    try {
        const id_classe = req.params.id
        const groupAffectations = await pool.query(`SELECT * FROM "Affectations" WHERE id_classe = $1`, [id_classe])
        res.json(groupAffectations.rows)
    } catch (err) {
        console.error(err.message)
    }
}




exports.getOneAffectation = async (req, res) => {
    try {
        const id_affectation = req.params.id
        const OneAffectation = await pool.query(`SELECT * FROM "Affectations" WHERE id_affectation = $1`, [id_affectation])
        if (OneAffectation) {
            res.json(OneAffectation.rows[0])
        }
        else {
            res.status(404).json({ message: 'Affectation not found' });

        }
    } catch (err) {
        console.error(err.message)
    }
}