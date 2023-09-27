const pool = require("../../config/dbpg")
const get_cgt_ts_r = require("./cgt_ts_r")

const get_cgt_ts_r_slot_conflict = async () => {
    const cgt_ts_r = await get_cgt_ts_r()

    // convertir le tableau cgt_ts_r en occupations_brute(object)
    let os_brute = [...cgt_ts_r]
    console.log(os_brute)
    os_brute.forEach((item1) => {
        os_brute.forEach((item2)=> {
            if(
                   item1[0] === item2[0]
                && item1[1] === item2[1]
                && item1[2] === item2[2]
                && item1[3] !== item2[3]
            ){
                
            }
        })
    })
    await pool.end()
}
get_cgt_ts_r_slot_conflict()
