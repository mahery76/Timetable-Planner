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
                });
            });
    });

    // adding effectif to occupation and handle effectif based on class in tronc commun
    occupations.forEach(occupation => {
        let effectif = 0
        occupation['tronc_commun'].forEach(classeTroncCommun => {
            let classe = classeEffectifTable.find(classe => classeTroncCommun === classe['id_classe'])
            effectif = effectif + classe['effectif_classe']
        })
        occupation["effectif"] = effectif
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

