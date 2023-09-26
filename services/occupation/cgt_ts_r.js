const pool = require("../../config/dbpg")
const get_cgt_ts = require("./cgt_ts")

const get_cgt_ts_r = async() => {
    const query = `SELECT "Salles".id_salle, "Salles".id_classe FROM "Classes" JOIN "Salles" ON "Classes".id_classe="Salles".id_classe`
    const classe_salles = (await pool.query(query)).rows
    const get_cgt_ts_data = await get_cgt_ts()

    get_cgt_ts_data.forEach((item => {
        classe_salles.forEach((cs) => {
            if(item[3] === cs['id_classe']){
                item.push(cs['id_salle'])
            }
        })
    }))

    console.log(get_cgt_ts_data)
    await pool.end()
}

get_cgt_ts_r()