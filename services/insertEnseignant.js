const Enseignants = require("../models/Enseignant")
const Users = require("../models/User")
const { sq } = require("../config/db")

sq.query("ALTER SEQUENCE enseignants_id_seq RESTART WITH 1;")

const insertEnseignant = async () => {

    // delete all records before inserting
    await Enseignants.destroy({ truncate: true, cascade: true })

    const ensdata = [
        ["Dr t1", "033", "t1@t1", 20000, "u0001"],
        ["Mr t2", "033", "t2@t2", 10000, "u0002"],
        ["Dr t3", "033", "t3@t3", 20000, "u0003"],
        ["Mr t4", "033", "t4@t4", 10000, "u0004"],
        ["Dr t5", "033", "t5@t5", 20000, "u0005"], 
    ]
    const insertOneEns = async (a, b, c, d, e) => {
        await Enseignants.create({
            nom_ens: a,
            coordonnees: b,
            email_ens: c,
            taux_hor: d,
            id_user: e
        })
    }

    ensdata.forEach(async(e) => {
        await insertOneEns(e[0],e[1],e[2],e[3],e[4])
    })
    console.log("teacher inserted")
}

module.exports = insertEnseignant