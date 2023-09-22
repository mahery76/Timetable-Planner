const Enseignants = require("../models/Enseignant")
const Classes = require("../models/Classe");
const Etudiants = require("../models/Etudiant");
const Users = require("../models/User");
const Creneaus = require("../models/Creneau");
const Ens_crens = require("../models/Ens_cren");
const Matieres = require("../models/Matiere");
const Classe_matieres = require("../models/Classe_matiere");
const Salles = require("../models/Salle");
const Occupations = require("../models/Occupation");

const insertSequentially = async () => {
    const ens1 = await Enseignants.create({
        nom_ens: "Dr Andriamapandry Josephin",
        coordonnees: "034 25 565 48",
        email_ens: "josephin@gmail.com",
        taux_hor: 10000
    });
    console.log('one ens created')

    const cls1 = await Classes.create({
        nom_classe: "AGRO L1A",
        effectif_classe: 50
    });
    console.log('one class created')  

    const etud1 = await Etudiants.create({
        nom_etudiant: "ANDRIANIRINA Mikanto",
        id_classe: cls1.id_classe
    })
    console.log('one student created')

    const user1 = await Users.create({
        mdp_user: "iaam tongi",
        id_etudiant: etud1.id_etudiant,
        id_ens: ens1.id_ens,
    })
    console.log('one user created')

    const cren1 = await Creneaus.create({
        valeur_cren: "CrenLun 1"
    })
    console.log('one slot created')

    const ens_cren1 = await Ens_crens.create({
        id_cren: cren1.id_cren,
        id_ens: ens1.id_ens,
    }) 
    console.log('one teacher slot created')

    const matiere1 = await Matieres.create({
        nom_matiere: "Anglais",
        volume_horaire: 30,
        id_ens: ens1.id_ens
    })
    console.log('one course created')

    const Classe_matieres1 = await Classe_matieres.create({
        id_classe: cls1.id_classe,
        id_matiere: matiere1.id_matiere
    })
    console.log('one course group added')

    const salle1 = await Salles.create({
        nom_salle: "labo",
        capacite: 45,
    })
    console.log('one room added')

    const occupation1 = await Occupations.create({
        heures_restantes: 15,
        id_ens_cren: ens_cren1.id_ens_cren,
        id_classe_matiere: Classe_matieres1.id_classe_matiere,
        id_salle: salle1.id_salle,
    })
    console.log('one occupation added')
}
insertSequentially()
module.exports = insertSequentially