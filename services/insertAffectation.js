const { sq } = require("../config/db");
const Affectations = require("../models/Affectation")

sq.query("ALTER SEQUENCE affectations_id_seq RESTART WITH 1;")

const insertAffectation = async () => {
    await Affectations.destroy({ truncate: true, cascade: true })
     
    // cdata = 20 affectations 
    const data = [
            // g : 1     2    3     4     5     6           7
            // g : TCO,  GI,  BTP,  ECO   

            // r : TCO,  GI,  BPT,  ECO, Labo, Salle-Info, Grande Salle 

               [ 30, 30, "g0001", "c0001", "t0001", "Effectifs", ["g0001"]],
               [ 30, 30, "g0001", "c0002", "t0001", "Effectifs", ["g0001"]],
               [ 30, 30, "g0001", "c0003", "t0002", "Effectifs", ["g0001"]],
               [ 30, 30, "g0001", "c0004", "t0003", "Effectifs", ["g0001"]],
               [ 30, 30, "g0001", "c0005", "t0004", "Labo Info", ["g0001"]],

               [ 30, 30, "g0002", "c0001", "t0001", "Effectifs", ["g0002"]],
               [ 30, 30, "g0002", "c0002", "t0001", "Effectifs", ["g0002"]],
               [ 30, 30, "g0002", "c0003", "t0002", "Effectifs", ["g0002"]],
               [ 30, 30, "g0002", "c0004", "t0003", "Effectifs", ["g0002"]],
               [ 30, 30, "g0002", "c0005", "t0004", "Labo Info", ["g0002"]],

               [ 30, 30, "g0003", "c0006", "t0005", "Effectifs", ["g0003"]],
               [ 30, 30, "g0003", "c0007", "t0005", "Effectifs", ["g0003"]],
               [ 30, 30, "g0003", "c0008", "t0006", "Effectifs", ["g0003"]],
               [ 30, 30, "g0003", "c0009", "t0007", "Effectifs", ["g0003", "g0004"]],
               [ 30, 30, "g0003", "c0003", "t0002", "Effectifs", ["g0003"]],
               [ 30, 30, "g0003", "c0005", "t0004", "Labo Info", ["g0003", "g0004"]],

               [ 30, 30, "g0004", "c0010", "t0008", "Effectifs", ["g0004"]],
               [ 30, 30, "g0004", "c0011", "t0009", "Effectifs", ["g0004"]],
               [ 30, 30, "g0004", "c0012", "t0008", "Effectifs", ["g0004"]],
               [ 30, 30, "g0004", "c0009", "t0007", "Effectifs", ["g0004", "g0003"]],
               [ 30, 30, "g0004", "c0003", "t0002", "Effectifs", ["g0004"]],
               [ 30, 30, "g0004", "c0005", "t0004", "Labo Info", ["g0004", "g0003"]],

               [ 30, 30, "g0005", "c0013", "t0010", "Effectifs", ["g0005"]],
               [ 30, 30, "g0005", "c0014", "t0010", "Effectifs", ["g0005"]],
               [ 30, 30, "g0005", "c0015", "t0011", "Effectifs", ["g0005"]],
               [ 30, 30, "g0005", "c0016", "t0010", "Effectifs", ["g0005"]],
               [ 30, 30, "g0005", "c0003", "t0002", "Effectifs", ["g0005"]],
               [ 30, 30, "g0005", "c0005", "t0004", "Labo Info", ["g0005"]]
    ]
    

    const insertonecourse = async (a, b, c, d, e, f, g) => {
        await Affectations.create({
            vh: a,
            vh_restante: b,
            id_classe: c,
            id_matiere: d,
            id_ens: e,
            salle: f,
            tronc_commun: g, 
        })
    }
    data.forEach(async (matiere) => {
        await insertonecourse(matiere[0], matiere[1], matiere[2], matiere[3], matiere[4], matiere[5], matiere[6])
    })

    console.log('affectations added')

}

module.exports = insertAffectation
