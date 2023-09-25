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
const insertEnseignant = require("../controllers/insertUserEnseignant")
const insertClasse = require("../controllers/insertClasseSalle")
const insertCreneaus = require("../controllers/insertCreneau")
const insertEnsCren = require("../controllers/insertEnsCren")
const insertMatieres = require("../controllers/insertMatieres")
const syncModels = async () => {
    try {
        // // at the first creation of one model
        // create_sequence_db()

        //await sq.sync({ force: true })
        await sq.sync()
        
        await insertEnseignant()
        await insertCreneaus()
        await insertEnsCren()
        await insertClasse()
        await insertMatieres()

        console.log('all models synced')

    } catch (err) {
        console.log(err)
    }
}
module.exports = syncModels