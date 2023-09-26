const { sq } = require("../config/db");
const Matieres = require("../models/Matiere")
sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")

const insertMatieres = async () => {
    await Matieres.destroy({ truncate: true, cascade: true })

    const cdata = [
        // Matieres g1 t1 t2 t3 t3 t5
        ["compta", 30, 30, 1,  "t0001"],
        ["anglais", 30, 30, "g0001", "t0002"],
        ["reseau", 30, 30, "g0001", "t0003"],
        ["algo", 30, 30, "g0001", "t0003"],
        ["stat", 30, 30, "g0001", "t0005"],


        // Matieres g2 t2 t3 t4 t4 t1
        ["compta", 30, 30, "g0002", "t0001"],
        ["anglais", 30, 30, "g0002", "t0002"],
        ["algo", 30, 30, "g0002", "t0003"],
        ["elec", 30, 30, "g0002", "t0004"],
        ["algebre", 30, 30, "g0002", "t0004"],

        // Matieres g3 t4 t5 t2 t1 t5
        ["compta", 30, 30, "g0003", "t0001"],
        ["algebre", 30, 30, "g0003", "t0004"],
        ["rdm", 30, 30, "g0003", "t0005"],
        ["anglais", 30, 30, "g0003", "t0002"],
        ["stat", 30, 30, "g0003", "t0005"],

        // Matieres g4 t3 t5 t4 t2 t1
        ["compta", 30, 30, "g0004", "t0001"],
        ["algo", 30, 30, "g0004", "t0003"],
        ["stat", 30, 30, "g0004", "t0005"],
        ["algebre", 30, 30, "g0004", "t0004"],
        ["anglais", 30, 30, "g0004", "t0002"],
    ]
    const insertonecourse = async (a, b, c, d, e) => {
        await Matieres.create({
            nom_matiere: a,
            vh: b,
            vh_restante: c,
            id_classe: d,
            id_ens: e,
        })
    }
    cdata.forEach(async (matiere) => {
        insertonecourse(matiere[1], matiere[2], matiere[3], matiere[4], matiere[5])
    })

    console.log('courses added')

}

module.exports = insertMatieres
