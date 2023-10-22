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
        WHERE 
        "Occupations".id_ens = $1 AND
        "Occupations"."isDone" = false
        ORDER BY "Occupations".id_occupation
        `;
        // izay seance efa vita na payee na tsia
        const occupations = (await pool.query(query, [id_ens])).rows

        // occupations efa terminees nefa mbola tsy payees
        const SecondQuery = `SELECT * FROM "Occupations" WHERE id_ens = $1 AND "isDone" = false AND "isPaied" = false`
        const notpaied = (await pool.query(SecondQuery,[id_ens])).rows
        const countOccupation = notpaied.length

        const Ens = (await pool.query(`SELECT * FROM "Enseignants" WHERE id_ens = $1`,[id_ens])).rows[0]
        const taux = Ens.taux_hor

        const Montant = countOccupation * 2 * taux
        res.json(
            {
                "occupations": occupations,
                "countOccupation" : countOccupation,
                "Montant": Montant
            }
        )
    } catch (err) {
        console.error(err.message)
    }
}

exports.setToPaiedOccupation = async (req, res) => {
    try {
        const id_occupation = req.params.id
        const query = `
        UPDATE "Occupations"
        SET "isPaied" = true
        WHERE id_occupation = $1
        RETURNING *
        `
        const response = (await pool.query(query,[id_occupation])).rows
        res.json(response)
    } catch (err) {
        console.error(err.message)
    }
}
exports.setToDoneOccupation = async (req, res) => {
    try {
        const id_occupation = req.params.id
        const query = `
        UPDATE "Occupations"
        SET "isDone" = true
        WHERE id_occupation = $1
        RETURNING *
        `
        const response = (await pool.query(query,[id_occupation])).rows
        res.json(response)
    } catch (err) {
        console.error(err.message)
    }
}





