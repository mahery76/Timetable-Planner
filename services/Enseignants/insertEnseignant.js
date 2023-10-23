const Enseignants = require("../../models/Enseignant")
const Users = require("../../models/User")
const { sq } = require("../../config/db")


const insertEnseignant = async () => {

    sq.query("ALTER SEQUENCE enseignants_id_seq RESTART WITH 1;")
    // delete all records before inserting
    await Enseignants.destroy({ truncate: true, cascade: true })

    const ensdata = [
        ["Mr RAKOTONIRINA Jean Mark", "034 456 85", "t2@t2", "u0001"],
        ["Mme RANDRIANIRINA Mikanto", "033 41 789 54", "t4@t4", "u0002"],
        ["Mr SEDSON Mickael", "033 45 156 12", "t4@t4", "u0003"],
        ["Mr HERITIANA Mihaja", "033 78 411 56", "t4@t4", "u0004"],
        ["Mr HARIMANANA Koto", "032 48 547 96", "t1@t1", "u0005"],
        ["Mme RASALAMA Georgette", "034 44 454 78", "t3@t3", "u0006"],
        ["Mr RAFALIMANANA Luc", "034 34 556 12", "t5@t5", "u0007"],
        ["Dr RANDRIANIRINA Jeanine", "033 02 102 10", "t5@t5", "u0008"],
        ["Dr RAZAKA Sedra", "033 45 126 232", "t5@t5", "u0009"],
        ["Dr MANITRA Sandra", "034 78 854 12", "t5@t5", "u0010"],
        ["Dr RAVOLOLONA Ravalomanana", "034 34 434 34", "t5@t5", "u0011"],
    ]
    const insertOneEns = async (a, b, c, e) => {
        await Enseignants.create({
            nom_ens: a,
            coordonnees: b,
            email_ens: c,
            id_user: e
        })
    }

    ensdata.forEach(async (e) => {
        await insertOneEns(e[0], e[1], e[2], e[4])
    })
    console.log("teacher inserted")
}

module.exports = insertEnseignant