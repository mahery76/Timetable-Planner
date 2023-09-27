const { sq } = require("../config/db");
const Affectations = require("../models/Affectation")

sq.query("ALTER SEQUENCE affectations_id_seq RESTART WITH 1;")

const insertAffectation = async () => {
    await Affectations.destroy({ truncate: true, cascade: true })
     
    // cdata = 20 affectations 
    const data = [
        // Affectations g1 t1 t2 t3 t3 t5
        ["c0001", 30, 30, "g0001", "t0001"],
        ["c0002", 30, 30, "g0001", "t0002"],
        ["c0003", 30, 30, "g0001", "t0003"],
        ["c0004", 30, 30, "g0001", "t0003"],
        ["c0008", 30, 30, "g0001", "t0005"],


        // Affectations g2 t2 t3 t4 t4 t1
        ["c0001", 30, 30, "g0002", "t0001"],
        ["c0002", 30, 30, "g0002", "t0002"],
        ["c0004", 30, 30, "g0002", "t0003"],
        ["c0005", 30, 30, "g0002", "t0004"],
        ["c0006", 30, 30, "g0002", "t0004"],

        // Affectations g3 t4 t5 t2 t1 t5
        ["c0001", 30, 30, "g0003", "t0001"],
        ["c0006", 30, 30, "g0003", "t0004"],
        ["c0007", 30, 30, "g0003", "t0005"],
        ["c0002", 30, 30, "g0003", "t0002"],
        ["c0008", 30, 30, "g0003", "t0005"],

        // Affectations g4 t3 t5 t4 t2 t1
        ["c0001", 30, 30, "g0004", "t0001"],
        ["c0004", 30, 30, "g0004", "t0003"],
        ["c0008", 30, 30, "g0004", "t0005"],
        ["c0006", 30, 30, "g0004", "t0004"],
        ["c0002", 30, 30, "g0004", "t0002"]
    ]

    const insertonecourse = async (a, b, c, d, e) => {
        await Affectations.create({
            id_matiere: a,
            id_classe: d,
            id_ens: e,
            vh: b,
            vh_restante: c,
        })
    }
    data.forEach(async (matiere) => {
        insertonecourse(matiere[0], matiere[1], matiere[2], matiere[3], matiere[4])
    })

    console.log('courses added')

}

module.exports = insertAffectation
