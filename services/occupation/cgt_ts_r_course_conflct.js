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
        }
    })
    const os_filtre = [];
    for (let i = 0; i < os_brute.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < os_filtre.length; j++) {
            if (
                os_brute[i].id_matiere !== os_filtre[j].id_matiere &&
                os_brute[i].id_classe === os_filtre[j].id_classe &&
                os_brute[i].id_ens === os_filtre[j].id_ens &&
                os_brute[i].id_cren === os_filtre[j].id_cren &&
                os_brute[i].jour_cren === os_filtre[j].jour_cren
            ) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            os_filtre.push(os_brute[i])
        }
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
