const pool = require("../../config/dbpg")
const get_cgt_ts_r_affectation_count = require("./4_cgt_ts_r_affectation_count")

const get_cgt_ts_r_groupe_conflict = async () => {
    const os_brute = await get_cgt_ts_r_affectation_count()
    const os_filtre = []

    for (let i = 0; i < os_brute.length; i++){
        let isDuplicate = false;
        if(
            
        )
    }


    await pool.end()
}
const f = async () => {
    let res = await get_cgt_ts_r_groupe_conflict()
    console.table(res)
}
f()

module.exports = get_cgt_ts_r_groupe_conflict