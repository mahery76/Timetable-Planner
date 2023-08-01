var matieres = [
    {
        "nomMatiere": "matiere1",
        "volumeHoraire": 20,
        "classe": "info L1",
    },
    {
        "nomMatiere": "matiere2",
        "volumeHoraire": 20,
        "classe": "info L1",
    },
    {
        "nomMatiere": "matiere3",
        "volumeHoraire": 20,
        "classe": "info L1",
    },
    {
        "nomMatiere": "matiere4",
        "volumeHoraire": 20,
        "classe": "info L2",
    },
    {
        "nomMatiere": "matiere5",
        "volumeHoraire": 20,
        "classe": "info L2",
    },
    {
        "nomMatiere": "matiere6",
        "volumeHoraire": 20,
        "classe": "info L2",
    },
]

var profs = [
    {
        "nom_prof": "prof1",
        "liste_matiere": ["matiere1", "matiere2"],
        "disp": ["Mer 1", "Mer 2", "Mer 3"]
    },
    {
        "nom_prof": "prof2",
        "liste_matiere": ["matiere3", "matiere4"],
        "disp": ["Lun 1", "Lun 2", "Lun 3"]
    },
    {
        "nom_prof": "prof3",
        "liste_matiere": ["matiere5", "matiere6"],
        "disp": ["Lun 1", "Lun 2"]
    }
]

const creneaux = [
    { nom: "Lun 1", valeur: "Lundi 8:30 - 10:30" },
    { nom: "Lun 2", valeur: "Lundi 10:30 - 12:30" },
    { nom: "Lun 3", valeur: "Lundi 13:30 - 15:30" },
    { nom: "Lun 4", valeur: "Lundi 15:30 - 17:30" },
    { nom: "Mar 1", valeur: "Mardi 8:30 - 10:30" },
    { nom: "Mar 2", valeur: "Mardi 10:30 - 12:30" },
    { nom: "Mar 3", valeur: "Mardi 13:30 - 15:30" },
    { nom: "Mar 4", valeur: "Mardi 15:30 - 17:30" },
    { nom: "Mer 1", valeur: "Mercredi 8:30 - 10:30" },
    { nom: "Mer 2", valeur: "Mercredi 10:30 - 12:30" },
    { nom: "Mer 3", valeur: "Mercredi 13:30 - 15:30" },
    { nom: "Mer 4", valeur: "Mercredi 15:30 - 17:30" },
    { nom: "Jeu 1", valeur: "Jeudi 8:30 - 10:30" },
    { nom: "Jeu 2", valeur: "Jeudi 10:30 - 12:30" },
    { nom: "Jeu 3", valeur: "Jeudi 13:30 - 15:30" },
    { nom: "Jeu 4", valeur: "Jeudi 15:30 - 17:30" },
    { nom: "Ven 1", valeur: "Vendredi 8:30 - 10:30" },
    { nom: "Ven 2", valeur: "Vendredi 10:30 - 12:30" },
    { nom: "Ven 3", valeur: "Vendredi 13:30 - 15:30" },
    { nom: "Ven 4", valeur: "Vendredi 15:30 - 17:30" },
    { nom: "Sam 1", valeur: "Samedi 8:30 - 10:30" },
    { nom: "Sam 2", valeur: "Samedi 10:30 - 12:30" },
]
const classeSchema = new Schema
module.exports = {
    matieres, profs, creneaux, 
}