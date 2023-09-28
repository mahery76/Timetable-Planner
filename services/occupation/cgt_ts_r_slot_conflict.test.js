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
            "dispo_date": i[5],
            //"valeur_cren": i[6],
            "vh_restante": i[7],
            "id_salle": i[8],
            "capacite": i[9],
            "nom_classe": i[10],
            "effectif": i[11],
            "v": 1
        }
    })
    // tab pour stockage sans 3 affectations successives 
    let only_two_identical = []
    only_two_identical.forEach((s3) => {
        let only_two_identical_count = 0
        os_brute.forEach((o) => {
            if (
                o["id_matiere"] === s3["id_matiere"]
                && o["id_classe"] === s3["id_classe"]
                && o["id_ens"] === s3["id_ens"]
                && o["id_cren"] !== s3["id_cren"]
                && only_two_identical_count < 3
            ) {
                only_two_identical_count ++
                only_two_identical.push(o)
            }
          
        })
    })
    console.table(only_two_identical)
    await pool.end()
    return os_brute
}
const f = async () => {
    let res = await get_cgt_ts_r_slot_conflict()
    console.table(res)
}
f()

module.exports = get_cgt_ts_r_slot_conflict
