const pool = require("../../config/dbpg")

const get_cgt_ts = async () => {

    const disposQuery = `SELECT 
    "Dispos".id_cren, 
    "Dispos".id_ens, 
    "Dispos".dispo_date, 
    "Creneaus".jour_cren, 
    "Creneaus".valeur_cren  
    FROM "Dispos"
    JOIN "Creneaus" 
    ON "Dispos".id_cren = "Creneaus".id_cren 
    ORDER BY "Dispos".id_dispo 
    `


    const ts = (await pool.query(disposQuery)).rows

    const cgt = (await pool.query(`SELECT * FROM "Affectations" 
                                   WHERE vh_restante != 0 
                                   ORDER BY "Affectations".id_affectation`
                                   )).rows

    // combinaisons possibles des affecations(cgt) et Dispos 
    const cgt_ts = []

    cgt.forEach(cgt_one => {
        ts.filter(ts_one => ts_one['id_ens'] === cgt_one['id_ens'])
            .forEach(ts_one => {
                cgt_ts.push([
                    cgt_one['id_matiere'],
                    cgt_one['id_classe'],
                    cgt_one['id_ens'],
                    ts_one['id_cren'],
                    ts_one['jour_cren'],
                    ts_one['dispo_date'].toISOString().split('T')[0],
                    ts_one['valeur_cren'],
                    cgt_one['vh_restante'] - 2,
                ]);
            });
    });
    return cgt_ts
}
const f = async () => {
    let res = await get_cgt_ts()
    await pool.end()
    console.table(res)
}
f()
module.exports = get_cgt_ts

