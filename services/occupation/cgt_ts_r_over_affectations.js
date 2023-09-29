const pool = require("../../config/dbpg")
const get_cgt_ts_r = require("./cgt_ts_r")

const get_cgt_ts_r_slot_conflict = async () => {
    const cgt_ts_r = await get_cgt_ts_r()

    // convertir le tableau cgt_ts_r en occupations_brute(object)

    let os_brute = cgt_ts_r.map((i) => {
        return {
            "id_matiere": i[0],
            "id_classe": i[1],
            "id_ens": i[2],
            "id_cren": i[3],
            "jour_cren": i[4],
            // "dispo_date": i[5],
            // "valeur_cren": i[6],
            // "vh_restante": i[7],
            // "id_salle": i[8],
            // "capacite": i[9],
            // "nom_classe": i[10],
            // "effectif": i[11],
            "state": 1
        }
    })
    let os_filtre = [...os_brute]
    let tocompare = os_brute[0]
    let count = 0
    for (j = 0; j < os_filtre.length; j++) {
        let compared = os_filtre[j]
        if (
            tocompare.id_matiere === compared.id_matiere &&
            tocompare.id_classe === compared.id_classe &&
            tocompare.id_ens === compared.id_ens &&
            tocompare.jour_cren === compared.jour_cren
        ) {
            count = count + 1
        }
        else  {
            count = 1
            tocompare = compared
        }
        compared["count"] = count
    }
    await pool.end()
    return os_filtre
} 

const f = async () => {
    let res = await get_cgt_ts_r_slot_conflict()
    console.table(res)
}
f()

module.exports = get_cgt_ts_r_slot_conflict
