const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seanceSchema = new Schema({
    id_classe: mongoose.SchemaTypes.ObjectId,
    id_matiere: mongoose.SchemaTypes.ObjectId,
    id_prof: mongoose.SchemaTypes.ObjectId,
    id_creneau: mongoose.SchemaTypes.ObjectId,
    id_salle: mongoose.SchemaTypes.ObjectId,
    date_seance: Date,
    id_ressource: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'creneau'
    },
    contenu_seance: String
})
const creneauSchema = new Schema({
    nom_creneau: String,
    valeur_creneau: String
})

const profSchema = new Schema({
    nom_prof: String,
    dispo_prof: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "creneau"
    }
})
const classeSchema = new Schema({
    nom_classe: String,
    effectifs: Number
})
const matiereSchema = new Schema({
    nom_matiere: String,
    id_prof: mongoose.SchemaTypes.ObjectId,
    volume_horaire: Number,
    lieu_matiere: mongoose.SchemaTypes.ObjectId,
    id_ressources: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'ressource'
    }
})

const ressourcesSchema = new Schema({
    nom_ressource: String
})

const lieuSchema = new Schema({
    nom_lieu: String
})

const seance = mongoose.model("seance", seanceSchema)
const creneau = mongoose.model("creneau", creneauSchema)
const prof = mongoose.model("prof", profSchema)
const classe = mongoose.model("classe", profSchema)
const matiere = mongoose.model("matiere", matiereSchema)
const ressource = mongoose.model("ressource", ressourcesSchema)
const lieu = mongoose.model("lieu", lieuSchema)

module.exports = {
    seance, creneau, prof, classe, matiere, ressource, lieu
}