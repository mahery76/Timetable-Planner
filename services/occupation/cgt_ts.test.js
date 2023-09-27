const pool = require("../../config/dbpg")

const get_cgt_ts = async () => {

    const ts = (await pool.query(`SELECT * FROM "Dispos"`)).rows
    const cgt = (await pool.query(`SELECT * FROM "Affectations"`)).rows

    // combinaisons possibles des affecations(cgt) et Dispos 
    const cgt_ts = []

    cgt.forEach(cgt_one => {

        ts.filter(ts_one => ts_one['id_ens'] === cgt_one['id_ens'])
            .forEach(ts_one => {
                cgt_ts.push([
                    cgt_one['id_matiere'],
                    cgt_one['id_classe'],
                    cgt_one['id_ens'],
                    ts_one['id_dispo'],
                    cgt_one['vh_restante'] - 2,
                ]);
            });
    });
    console.log(cgt_ts)
    await pool.end()

}
get_cgt_ts()

