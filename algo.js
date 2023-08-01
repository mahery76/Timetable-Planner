

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
        console.log(profsLundi[i])

        // alaina ny matiere-ny rehetra
        let matieresProfLundi = []
        for (let g = 0; g < profs.length; g++) {
            if (profsLundi[i] == profs[g]["nom_prof"]) {
                matieresProfLundi = profs[g]["liste_matiere"]
                break;
            }
        }

        // bouclena ilay matieres anle prof 
        for (let j = 0; j < matieresProfLundi.length; j++) {
            console.log(matieresProfLundi[j])
            // boucle ilay tableau matieres ijerena anle classe apenariny
            for (let k = 0; k < matieres.length; k++) {
                if (matieresProfLundi[j] == matieres[k]["nomMatiere"]) {
                    console.log(matieres[k]["classe"]) // ilay classe toponle matiere
                    // boucle am seance ijerena sao misy conflit
                    if (seances) {
                        for (let l = 0; l < seances.length; l++) {
                            // sitomina izay horraire manana valeur cren rehetra
                            if (seances[l]["horraire"] == cren) {
                                // raha efa nisy naka ilay class amin'ilay lera cren
                                // zany oe ny classe hita anatinlay seance am lera cren dia efa 
                                // misy anle classe tokony ampenarina anle matiere

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
                                    seance["prof"] = profsLundi[i]
                                    seance["horraire"] = cren
                                    seance["heure_restante"] = matieres[k]["volumeHoraire"]
                                    seances.push(seance)
                                    // mifindra prof hafa
                                    if (i++) {
                                        i++
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(seances)
}

getEdtCren('Lun 1')
