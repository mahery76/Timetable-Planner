const Classes = require("../models/Classe");
const Enseignants = require("../models/Enseignant");
const Matieres = require("../models/Matiere");
const Users = require("../models/User");

const insert = async () => {

    const Soloniaina = await Users.create({
        email_user: "tongi111@gmail.com",
        mdp_user: "iaam tongi",
        role_user: "Enseignant",
        Enseignants:[{
            nom_ens: "Dr Andriamapandry Josephin",
            coordonnees: "034 25 565 48",
            email_ens: "josephin@gmail.com",
            taux_hor: 10000,
        }]
    },
    {
        include: Enseignants
    })
    console.log("one teacher user added: ", Soloniaina.toJSON())

    const cls1 = await Classes.create({
        nom_classe: "AGRO L1A",
        effectif_classe: 50,
        Matieres: [
            {
                nom_matiere: "Anglais",
                volume_horaire: 30,
                volume_horaire_restante: 22,
                id_ens: Soloniaina.id_ens

            },
            {
                nom_matiere: "Francais",
                volume_horaire: 50,
                volume_horaire_restante: 22,
                id_ens: Soloniaina.id_ens
            }
        ]
    },
        {
            include: Matieres
        });
    console.log(cls1.toJSON())


}
insert()





