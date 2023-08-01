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

var seance = {
    "classes": "info L1",
    "matiere": "matiere1",
    "heure_restante": 10,
    "prof": "prof1",
    "horraire": "Lun 1"
}

var creneaux = [
    { "Lun 1": "Lundi 8:30 - 10:30" },
    { "Lun 2": "Lundi 10:30 - 12:30" },
    { "Lun 3": "Lundi 13:30 - 15:30" },
    { "Lun 4": "Lundi 15:30 - 17:30" },
    { "Mar 1": "Mardi 8:30 - 10:30" },
    { "Mar 2": "Mardi 10:30 - 12:30" },
    { "Mar 3": "Mardi 13:30 - 15:30" },
    { "Mar 4": "Mardi 15:30 - 17:30" },
    { "Mer 1": "Mercredi 8:30 - 10:30" },
    { "Mer 2": "Mercredi 10:30 - 12:30" },
    { "Mer 3": "Mercredi 13:30 - 15:30" },
    { "Mer 4": "Mercredi 15:30 - 17:30" },
    { "Jeu 1": "Jeudi 8:30 - 10:30" },
    { "Jeu 2": "Jeudi 10:30 - 12:30" },
    { "Jeu 3": "Jeudi 13:30 - 15:30" },
    { "Jeu 4": "Jeudi 15:30 - 17:30" },
    { "Ven 1": "Vendredi 8:30 - 10:30" },
    { "Ven 2": "Vendredi 10:30 - 12:30" },
    { "Ven 3": "Vendredi 13:30 - 15:30" },
    { "Ven 4": "Vendredi 15:30 - 17:30" },
    { "Sam 1": "Samedi 8:30 - 10:30" },
    { "Sam 2": "Samedi 10:30 - 12:30" },
]
var creneaux = [
    {
        "id_creneaux": 1,
        "nom_creneaux": "Lun 1",
        "valeur": "Lundi 8:30 - 10:30"
    }
]
