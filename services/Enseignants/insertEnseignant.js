const Enseignants = require("../../models/Enseignant")
const Users = require("../../models/User")
const { sq } = require("../../config/db")

sq.query("ALTER SEQUENCE enseignants_id_seq RESTART WITH 1;")

const insertEnseignant = async () => {

    // delete all records before inserting
    await Enseignants.destroy({ truncate: true, cascade: true })

    const ensdata = [
        ["Mr RAKOTONIRINA Jean Mark", "034 456 85", "t2@t2", 10000,  "u0001"],
        ["Mme RANDRIANIRINA Mikanto", "033 41 789 54", "t4@t4", 10000,  "u0002"],
        ["Mr SEDSON Mickael", "033 45 156 12", "t4@t4", 10000,  "u0003"],
        ["Mr HERITIANA Mihaja", "033 78 411 56", "t4@t4", 10000,  "u0004"],
        ["Mr HARIMANANA Koto", "032 48 547 96", "t1@t1", 10000,  "u0005"],
        ["Mme RASALAMA Georgette", "034 44 454 78", "t3@t3", 10000,  "u0006"],
        ["Mr RAFALIMANANA Luc", "034 34 556 12", "t5@t5", 10000,  "u0007"], 
        ["Dr RANDRIANIRINA Jeanine", "033 02 102 10", "t5@t5", 20000,  "u0008"], 
        ["Dr RAZAKA Sedra", "033 45 126 232", "t5@t5", 20000,  "u0009"], 
        ["Dr MANITRA Sandra", "034 78 854 12", "t5@t5", 20000, "u0010"], 
        ["Dr RAVOLOLONA Ravalomanana", "034 34 434 34", "t5@t5", 20000, "u0011"], 
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