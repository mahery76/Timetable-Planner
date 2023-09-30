const { sq } = require("../config/db")
const create_sequence_db = require("./create_sequence_db")
// create_sequence_db()
const Users = require("../models/User")
const Etudiants = require("../models/Etudiant")
const Enseignants = require("../models/Enseignant")
const Creneaus = require("../models/Creneau")
const Dispo = require("../models/Dispo")
const Classes = require("../models/Classe")
const Salles = require("../models/Salle")
const Matieres = require("../models/Matiere")
const Affectations =  require("../models/Affectation")
const Occupations = require("../models/Occupation")
const insertUser = require("../services/insertUser")
const insertEnseignant = require("../services/insertEnseignant")
const insertCreneau = require("../services/insertCreneau")
const insertDispo = require("../services/insertDispo")
const insertClasse = require("../services/insertClasse")
const insertSalle = require("../services/insertSalle")
const insertMatiere = require("../services/insertMatiere")
const insertAffectation = require("../services/insertAffectation")
const syncModels = async () => {  
    try {
        // // at the first creation of one model

        await sq.sync()
        //await sq.sync({ force: true })

        await insertUser()
        await insertEnseignant()
        await insertCreneau()
        await insertDispo()
        await insertClasse()
        await insertSalle()
        await insertMatiere()
        await insertAffectation()

        console.log('all models synced')

    } catch (err) {
        console.log(err)
    }
}
module.exports = syncModels