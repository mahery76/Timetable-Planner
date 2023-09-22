const Enseignants = require("../models/Enseignant")
const Classes = require("../models/Classe");
const Etudiants = require("../models/Etudiant");
const Users = require("../models/User");
const Creneaus = require("../models/Creneau");
const Ens_crens = require("../models/Ens_cren");

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

}
insertSequentially()
module.exports = insertSequentially