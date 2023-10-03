const pool = require("../../config/dbpg")
const updateAffectation = require("./1_affectationEffectif")

const get_occupations_brute = async () => {

    const  cgt = await updateAffectation()
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

    // obtenir la table disponibilites des ens
    const ts = (await pool.query(disposQuery)).rows

    // combinaisons possibles des affecations(cgt) et Dispos 
    const occupations = []
    
    //combiner avec les disponibilites des profs les affectations 
    cgt.forEach(cgt_one => {
        ts.filter(ts_one => ts_one['id_ens'] === cgt_one['id_ens'])
            .forEach(ts_one => {
                occupations.push({
                    id_classe: cgt_one['id_classe'],
                    id_matiere: cgt_one['id_matiere'],
                    id_ens: cgt_one['id_ens'],
                    id_cren: ts_one['id_cren'],
                    jour_cren: ts_one['jour_cren'],
                    id_tronc_commun: cgt_one['id_tronc_commun'],
                    effectif: cgt_one['effectif'],
                    id_salle: cgt_one['id_salle'],
                    vh_restante: cgt_one['vh_restante'] - 2,
                });
            });
    });

    return occupations
}
// const f = async () => {
//     let res = await get_occupations_brute()
//     await pool.end()
//     console.table(res)
// }
// f()
module.exports = get_occupations_brute

