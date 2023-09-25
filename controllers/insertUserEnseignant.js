const Enseignants = require("../models/Enseignant")
const Users = require("../models/User")
const { sq } = require("../config/db")

sq.query("ALTER SEQUENCE users_id_seq RESTART WITH 1;")
sq.query("ALTER SEQUENCE enseignants_id_seq RESTART WITH 1;")

const insertEnseignant = async () => {

    // delete all records before inserting
    await Enseignants.destroy({truncate: true, cascade:true})
    await Users.destroy({truncate: true, cascade:true})

    await Users.create({
        email_user: "tongi111@gmail.com",
        mdp_user: "iaam tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Dr Andriamapandry Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "josephin@gmail.com",
            taux_hor: 20000,
        }]
    },
    {
        include: Enseignants
    })

    await Users.create({
        email_user: "manampy@gmail.com",
        mdp_user: "Manampy tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Dr Manampy Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "manampy@gmail.com",
            taux_hor: 20000,
        }]
    },
    {
        include: Enseignants
    })

    await Users.create({
        email_user: "ernest@gmail.com",
        mdp_user: "Ernest tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Mme Ernest Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "Ernest@gmail.com",
            taux_hor: 10000,
        }]
    },
    {
        include: Enseignants
    })

    await Users.create({
        email_user: "fy@gmail.com",
        mdp_user: "fy tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Mme Fy Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "fy@gmail.com",
            taux_hor: 10000,
        }]
    },
    {
        include: Enseignants
    })
   
    await Users.create({
        email_user: "jason@gmail.com",
        mdp_user: "Jason tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Mme Jason Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "jason@gmail.com",
            taux_hor: 10000,
        }]
    },
    {
        include: Enseignants
    })
   



    console.log("teacher inserted")

}

module.exports = insertEnseignant