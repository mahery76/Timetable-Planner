const pool = require("../../config/dbpg")
const get_cgt_ts_r_course_conflict = require("./2_occupation_course_conflct")
const get_cgt_ts_r_affectation_count = async () => {
    const os_brute = await get_cgt_ts_r_course_conflict()

   
    // console.table(os_brute)
    let os_counted = [...os_brute]
    let tocompare = os_counted[0]
    let count = 0
    for (let j = 0; j < os_counted.length; j++) {
        let compared = os_counted[j]
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
        compared["o_count"] = count
    }
    return os_counted
} 

// const f = async () => {
//     let res = await get_cgt_ts_r_affectation_count()
//     console.table(res)
//     await pool.end()
// }
// f()

module.exports = get_cgt_ts_r_affectation_count
