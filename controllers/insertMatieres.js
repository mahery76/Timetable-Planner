const { sq } = require("../config/db");
const Matieres = require("../models/Matiere")
sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")

const insertMatieres = async () => {
    await Matieres.destroy({ truncate: true, cascade: true })

    // Matieres g1
    await Matieres.create({nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001",})
    await Matieres.create({nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001",})
    await Matieres.create({nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001",})
    await Matieres.create({nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001",})
    await Matieres.create({nom_matiere: "Comptabilite", vh: 30, vh_restante: 30, id_classes: "g0001", id_ens: "t0001",})

    console.log('courses added')

}

module.exports = insertMatieres
