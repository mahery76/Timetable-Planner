const { sq } = require("../config/db")
const create_sequence_db = require("./create_sequence_db")
const Enseignants = require("../models/Enseignant")
const Classes = require("../models/Classe")
const Etudiants = require("../models/Etudiant")
const Users = require("../models/User")
const Creneaux = require("../models/Creneau")
const Ens_crens = require("../models/Ens_cren")
const Matieres =  require("../models/Matiere")
const Salles = require("../models/Salle")
const Occupations = require("../models/Occupation")
const insertUser = require("../services/insertUser")
const insertEnseignant = require("../services/insertEnseignant")
const insertCreneaus = require("../services/insertCreneau")
const insertEnsCren = require("../services/insertEnsCren")
const insertClasse = require("../services/insertClasse")
const insertSalle = require("../services/insertSalle")
const insertMatieres = require("../services/insertMatieres")
const syncModels = async () => {
    try {
        // // at the first creation of one model
        // create_sequence_db()

        //await sq.sync({ force: true })
        await sq.sync()

        await insertUser()
        await insertEnseignant()
        await insertCreneaus()
        await insertEnsCren()
        await insertClasse()
        await insertSalle()
        await insertMatieres()

        console.log('all models synced')

    } catch (err) {
        console.log(err)
    }
}
module.exports = syncModels