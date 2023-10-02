const pool = require("../../config/dbpg")

const get_occupations_brute = async () => {

    const disposQuery = `
    SELECT 
    "Dispos".id_ens, 
    "Dispos".id_cren, 
    "Creneaus".jour_cren, 
    "Creneaus".valeur_cren  
    FROM "Dispos"
    JOIN "Creneaus" 
    ON "Dispos".id_cren = "Creneaus".id_cren 
    ORDER BY "Dispos".id_dispo 
    `

    const affecationsQuery = `
    SELECT *
    FROM "Affectations" 
    WHERE vh_restante != 0 
    ORDER BY "Affectations".id_affectation
    `
    // obtenir la table disponibilites des ens
    const ts = (await pool.query(disposQuery)).rows

    // obtenir la table des affectations
    const cgt = (await pool.query(affecationsQuery)).rows

    // obtenir la table des classes qui comporte ses effectifs
    const classeEffectifTable = (await pool.query(`SELECT * FROM "Classes"`)).rows

    // combinaisons possibles des affecations(cgt) et Dispos 
    const occupations = []

    cgt.forEach(cgt_one => {
        ts.filter(ts_one => ts_one['id_ens'] === cgt_one['id_ens'])
            .forEach(ts_one => {
                occupations.push({
                    id_classe: cgt_one['id_classe'],
                    id_matiere: cgt_one['id_matiere'],
                    id_ens: cgt_one['id_ens'],
                    id_cren: ts_one['id_cren'],
                    jour_cren: ts_one['jour_cren'],
                    id_salle: cgt_one['id_salle'],
                    vh_restante: cgt_one['vh_restante'] - 2,
                    tronc_commun: cgt_one['tronc_commun'],
                    semaine: cgt_one['semaine']
                });
            });
    });
    const commonClassList = occupations.filter(item => {
        return (
            // item.id_classe !== id_classe &&
            // item.id_matiere === id_matiere &&
            // item.id_ens === id_ens &&
            // item.id_cren === id_cren &&
            item.tronc_commun === true
        )
    })
    console.log('izy ty rahalahy ah')
    console.table(commonClassList)

    // adding effectif to occupation and handle effectif based on class in tronc commun
    occupations.forEach(occupation => {

        const classe = classeEffectifTable.find(classe => occupation['id_classe'] === classe['id_classe'])
        occupation["effectif"] = classe['effectif_classe']

        if (occupation.tronc_commun === true) {
            let { id_classe, id_matiere, id_ens, id_cren, tronc_commun } = occupation
            const commonClassList = occupations.filter(item => {
                return (
                    item.id_classe !== id_classe &&
                    item.id_matiere === id_matiere &&
                    item.id_ens === id_ens &&
                    item.id_cren === id_cren &&
                    item.tronc_commun === true
                )
            })
            console.log('izy ty rahalahy ah')
            console.table(commonClassList)
            const effectif = commonClassList.reduce((accumulator, currentValue) => {
                return accumulator + currentValue["effectif"]
            }, 0)
            occupation["effectif"] = effectif
        }

    })

    return occupations
}
const f = async () => {
    let res = await get_occupations_brute()
    await pool.end()
    console.table(res)
}
f()
module.exports = get_occupations_brute

