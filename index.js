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
    "horraire": ["Lun 1", "Lun 2"]
}

// filtrer tous les prof dispo le lundi
const getProfCren = (cren) => {
    proLun = []
    profs.forEach((prof, i) => {
        if (prof["disp"].includes(cren)) {
            proLun.push(prof["nom_prof"])
        }
    })
    return proLun
}

const getEdtCren = (cren) => {
    let seances = []
    let profsLundi = getProfCren(cren)
    profsLundi.forEach((profLun) => {
        // get all matiere of profLun
        let matieresProfLundi
        profs.forEach((prof, i) => {
            if (profLun == prof["nom_prof"]) {
                matieresProfLundi = prof["liste_matiere"]
            }
        })

        //loop throw matieres
        matieresProfLundi.forEach((matiereProfLun, i) => {

            matieres.forEach((matiere, i) => {
                let seance = {
                    "classe": "",
                    "nomMatiere": "",
                    "prof": "",
                    "horraire": [],
                    "heure_restante": 0
                }
                if (matiereProfLun == matiere["nomMatiere"]) {
                    // avoaka ilay classe manao azy
                    console.log(matiere)
                }
                seance["classe"] = matiere["classe"]
                seance["nomMatiere"] = matiere["nomMatiere"]
                seance["heure_restante"] = matiere["volumeHoraire"]
                seance["prof"] = profLun

                profs.forEach((prof, i) => {
                    
                    if (prof["nom_prof"] == profLun) {
                        seance["horraire"] = prof["disp"]
                    }
                })
                seances.push(seance)
            })
        })
    })
    return seances 
}
console.log(getEdtCren('Lun 1'))




