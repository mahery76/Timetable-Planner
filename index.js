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
        "classe": "info L2",
    },
    {
        "nomMatiere": "matiere4",
        "volumeHoraire": 20,
        "classe": "info L2",
    },
    {
        "nomMatiere": "matiere5",
        "volumeHoraire": 20,
        "classe": "info L3",
    },
    {
        "nomMatiere": "matiere6",
        "volumeHoraire": 20,
        "classe": "info L3",
    },
]

var profs = [
    {
        "nom_prof": "prof1",
        "liste_matiere": ["matiere1", "matiere3"],
        "disp": ["Mer 1", "Mer 2", "Mer 3"]
    },
    {
        "nom_prof": "prof2",
        "liste_matiere": ["matiere2", "matiere5"],
        "disp": ["Lun 1", "Lun 2", "Lun 3"]
    },
    {
        "nom_prof": "prof3",
        "liste_matiere": ["matiere4", "matiere6"],
        "disp": ["Lun 1", "Lun 2"]
    }
]

var seances = [
    {
        "classes": "info L1",
        "matiere": "matiere2",
        "heure_restante": 10,
        "prof": "prof1",
        "horraire": "Lun 1"
    },
    {
        "classes": "info L2",
        "matiere": "matiere1",
        "heure_restante": 10,
        "prof": "prof1",
        "horraire": ["Lun 1", "Lun 2"]
    },
    {
        "classes": "info L3",
        "matiere": "matiere1",
        "heure_restante": 10,
        "prof": "prof1",
        "horraire": ["Lun 1", "Lun 2"]
    },
]

// filtrer tous les prof dispo le lun1 et retourner le noms
const getProfCren = (cren) => {
    proLun = []
    profs.forEach(prof => {
        if (prof["disp"].includes(cren)) {
            proLun.push(prof["nom_prof"])
        }
    })
    return proLun
}

const getEdtCren = (cren) => {
    let profsLundi = getProfCren(cren)

    // loop throw all profsLundi 
    for (let i = 0; i < profsLundi.length; i++) {

        // alaina ny matiere-ny rehetra
        let matieresProfLundi = []
        profs.forEach(prof => {
            if (profsLundi[i] == prof["nom_prof"]) {
                matieresProfLundi = prof["liste_matiere"]
            }
        })

        // bouclena ilay matieres anle prof 
        for (let j = 0; j < matieresProfLundi.length; j++) {
            // boucle ilay tableau matieres ijerena anle classe apenariny
            for (let k = 0; k < matieres.length; k++) {
                if (matieresProfLundi[j] == matieres[k]["nomMatiere"]) {
                    console.log(matieres[k]["classe"])
                    // boucle am seance ijerena sao misy conflit
                    if (seances) {
                        for (let l = 0; l < seances.length; l++) {
                            // sitomina izay horraire manana valeur cren rehetra
                            if (seances[l]["horraire"] == cren) {
                                // raha efa nisy naka ilay class amin'ilay lera cren
                                if (seances[l]["classe"] == matieres[k]["classe"]) {
                                    k++
                                    break;
                                }
                                else {
                                    let seance = {
                                        "classe": "",
                                        "nomMatiere": "",
                                        "prof": "",
                                        "horraire": [],
                                        "heure_restante": 0
                                    }
                                    seance["classe"] = matieres[k]["classe"]
                                    seance["nomMatiere"] = matieres[k]["nomMatiere"]
                                    seance["heure_restante"] = matieres[k]["volumeHoraire"]
                                    seance["prof"] = profsLundi[i]
                                    seance["horraire"] = cren
                                    seances.push(seance)
                                    // mifindra prof hafa
                                    i++
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // console.log(seances)
}
getEdtCren('Lun 1')
