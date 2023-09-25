const { sq } = require("../config/db");
const Matieres = require("../models/Matiere")
sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")

const insertMatieres = async () => {
    await Matieres.destroy({ truncate: true, cascade: true })

    // Matieres g1 t1 t2 t1 t3 t5
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0002", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0003", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0005", })

    // Matieres g2 t2 t3 t4 t4 t1
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0002", id_ens: "t0002", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0002", id_ens: "t0003", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0002", id_ens: "t0004", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0002", id_ens: "t0004", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0002", id_ens: "t0001", })

    // Matieres g3 t4 t5 t2 t3 t5
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0003", id_ens: "t0004", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0003", id_ens: "t0005", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0003", id_ens: "t0002", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0003", id_ens: "t0003", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0003", id_ens: "t0005", })

    // Matieres g4 t3 t5 t4 t2 t1
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0004", id_ens: "t0003", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0004", id_ens: "t0005", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0004", id_ens: "t0004", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0004", id_ens: "t0002", })
    await Matieres.create({ nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0004", id_ens: "t0001", })

    console.log('courses added')

}

module.exports = insertMatieres
