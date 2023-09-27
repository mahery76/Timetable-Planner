const pool = require("../../config/dbpg")
const get_cgt_ts_r = require("./cgt_ts_r")

const get_cgt_ts_r_slot_conflict = async () => {
    const cgt_ts_r = await get_cgt_ts_r()

    // convertir le tableau cgt_ts_r en occupations_brute(object)
    let os_brute = [...cgt_ts_r]
    let os_true = []
    if (os_true.length === 0) {
        os_true.push(os_brute[0])
    }
    console.log(os_brute[0])
    console.log(os_brute[1])
 
    os_brute.forEach((o_brute) => {
        os_true.forEach((o_true) => {
            if (o_brute[0] !== o_true[0] && o_brute[3] !== o_true[3]){
                os_true.push(o_brute)
            }
        })
    })
    await pool.end()
}
get_cgt_ts_r_slot_conflict()
