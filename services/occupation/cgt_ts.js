const pool = require("../../config/dbpg")

const get_cgt_ts = async () => {
    
    const ts = (await pool.query(`SELECT * FROM "Ens_crens"`)).rows
    const cgt = (await pool.query(`SELECT * FROM "Matieres"`)).rows

    // combinaisons possibles des matieres(cgt) et ens_cren 
    const cgt_ts = []

    // cgt.forEach((one_cgt) => {
    //     ts.forEach((ts_one) => {
    //         if (ts_one['id_ens'] === one_cgt['id_ens']) {
    //             cgt_ts_one['id_ens_cren'] = ts_one['id_ens_cren']
    //             cgt_ts_one['id_matiere']
    //             cgt_ts.push([
    //                 one_cgt['id_matiere'], ts_one['id_ens_cren'],
    //             ])
    //         }
    //     })
    // })

    cgt.forEach(cgt_one => {
        ts.filter(ts_one => ts_one['id_ens'] === cgt_one['id_ens'])
          .forEach(ts_one => {
              cgt_ts.push([
                  cgt_one['id_matiere'],
                  ts_one['id_ens_cren'],
                  cgt_one['vh_restante'] - 2,
                  cgt_one['id_classe']
              ]);
          });
    });
    return cgt_ts
}
module.exports = get_cgt_ts

