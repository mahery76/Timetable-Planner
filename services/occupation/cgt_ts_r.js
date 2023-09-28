const pool = require("../../config/dbpg")
const get_cgt_ts = require("./cgt_ts")

// combinaisons possibles des matieres(cgt) , ens_cren (ts) et salles (r) 

const get_cgt_ts_r = async () => {
    const query = `SELECT 
    "Salles".id_classe, 
    "Salles".id_salle, 
    "Classes".effectif_classe,
    "Salles".nom_salle, 
    "Salles".capacite
    FROM "Classes" 
    JOIN "Salles" 
    ON "Classes".id_classe = "Salles".id_classe`

    const classe_salles = (await pool.query(query)).rows
    const cgt_ts = await get_cgt_ts()

    let cgt_ts_r = []

    cgt_ts_r = [...cgt_ts]

    cgt_ts_r.forEach((item => {
        classe_salles.forEach((cs) => {
            if (item[1] === cs['id_classe']) {
                item.push(cs['id_salle'])
                item.push(cs['capacite'])
                item.push(cs['nom_salle'])
                item.push(cs['effectif_classe'])
            }
        })
    }))
    
    return cgt_ts_r
}
// const f = async () => {
//     let res = await get_cgt_ts_r()
//     console.table(res)
//     await pool.end()
// }
// f()

module.exports = get_cgt_ts_r