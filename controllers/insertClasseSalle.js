const { sq } = require("../config/db")
const Classes = require("../models/Classe")
const Salles = require("../models/Salle")

sq.query("ALTER SEQUENCE classes_id_seq RESTART WITH 1;")
sq.query("ALTER SEQUENCE salles_id_seq RESTART WITH 1;")

const insertClasse = async () => {

    // delete all records before inserting
    await Classes.destroy({truncate: true, cascade:true})
    await Salles.destroy({truncate: true, cascade:true})

    await Classes.create({
        nom_classe : "GI", effectif_classe: 20,
        Salles:[{
            nom_salle: "GI",
            capacite: 25
        }]
    },
    {
        include: Salles
    })   

    await Classes.create({
        nom_classe : "TCO", effectif_classe: 20,
        Salles:[{
            nom_salle: "TCO",
            capacite: 25
        }]
    },
    {
        include: Salles
    })   

    await Classes.create({
        nom_classe : "BTP", effectif_classe: 20,
        Salles:[{
            nom_salle: "BTP",
            capacite: 25
        }]
    },
    {
        include: Salles
    })    

    await Classes.create({
        nom_classe : "ECO", effectif_classe: 20,
        Salles:[{
            nom_salle: "ECO",
            capacite: 25
        }]
    },
    {
        include: Salles
    })    

    console.log("classes and room added")
    
}
module.exports = insertClasse