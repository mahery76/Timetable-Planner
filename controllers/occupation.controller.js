const pool = require("../config/dbpg")
const Occupations = require("../models/Occupation")
const getRoom = require("../services/occupation/11_getRoom")
exports.generateOccupation = async (req, res) => {
    try {
        const occupations = await getRoom()
        const insertOccupations = async (a, b, c, d, e, f, g, h) => {
            await Occupations.create({
                date_occupation: a,
                heures_restantes: b,
                id_classe: c,
                id_matiere: d,
                id_ens: e,
                id_cren: f,
                id_tronc_commun: g,
                id_salle: h,
            })
        }
        occupations.forEach(async (occ) => {
            await insertOccupations(
                occ['date_dispo'],
                occ['vh_restante'],
                occ['id_classe'],
                occ['id_matiere'],
                occ['id_ens'],
                occ['id_cren'],
                occ['id_tronc_commun'],
                occ['id_salle']
            )
        })
        res.json({ "Message": "Géneration avec succés" })
    } catch (err) {
        console.error(err)
    }
}
exports.getOccupationsEnsCompte = async (req, res) => {
    try {
        const id_ens = req.params.id
        const query = `
        SELECT 
        "Occupations".id_occupation,
        "Classes".nom_classe,
        "Matieres".nom_matiere,
        "Creneaus".valeur_cren,
        "Occupations".date_occupation,
        "Occupations"."isDone",
        "Occupations"."isPaied" 
        FROM "Occupations"
        JOIN "Classes" ON  "Occupations".id_classe = "Classes".id_classe
        JOIN "Matieres" ON "Occupations".id_matiere = "Matieres".id_matiere
        JOIN "Creneaus" ON "Occupations".id_cren = "Creneaus".id_cren
        WHERE "Occupations".id_ens = $1
        ORDER BY "Occupations".date_occupation
        `;
        const occupations = await pool.query(query, [id_ens])
        res.json(occupations.rows)
    } catch (err) {
        console.error(err.message)
    }
}





