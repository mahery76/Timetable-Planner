const { sq } = require("../config/db")
const Dispos = require("../models/Dispo")

sq.query("ALTER SEQUENCE dispos_id_seq RESTART WITH 1;")

const insertDispos = async () => {
    await Dispos.destroy({ truncate: true, cascade: true })

    const enscrendata = [
        // first  lundi mercredi
        ["t0001", "s0001"],
        ["t0001", "s0002"],
        ["t0001", "s0003"],
        ["t0001", "s0004"],

        ["t0001", "s0009"],
        ["t0001", "s0010"],
        ["t0001", "s0011"],
        ["t0001", "s0012"],

        // // second   mardi      
        ["t0002", "s0005"],
        ["t0002", "s0006"],
        ["t0002", "s0007"],
        ["t0002", "s0008"],

        // // third    jeudi
        ["t0003", "s0013"],
        ["t0003", "s0014"],
        ["t0003", "s0015"],
        ["t0003", "s0016"],

        // // fourth   jeudi vendredi 
        ["t0004", "s0013"],
        ["t0004", "s0014"],
        ["t0004", "s0015"],
        ["t0004", "s0016"],

        ["t0004", "s0017"],
        ["t0004", "s0018"],
        ["t0004", "s0019"],
        ["t0004", "s0020"],

        // // fifth   vendredi samedi
        ["t0005", "s0017"],
        ["t0005", "s0018"],
        ["t0005", "s0019"],
        ["t0005", "s0020"],

        ["t0005", "s0021"],
        ["t0005", "s0022"],
        ["t0005", "s0023"],
        ["t0005", "s0024"],

        // //sixth  Mercredi
        ["t0006", "s0009"],
        ["t0006", "s0010"],
        ["t0006", "s0011"],
        ["t0006", "s0012"],

        // //seventh  vendredi
        ["t0007", "s0017"],
        ["t0007", "s0018"],
        ["t0007", "s0019"],
        ["t0007", "s0020"],

        //eighth  Mar Mer Jeu
        ["t0008", "s0005"],
        ["t0008", "s0006"],
        ["t0008", "s0007"],
        ["t0008", "s0008"],

        ["t0008", "s0009"],
        ["t0008", "s0010"],
        ["t0008", "s0011"],
        ["t0008", "s0012"],

        ["t0008", "s0013"],
        ["t0008", "s0014"],
        ["t0008", "s0015"],
        ["t0008", "s0016"],

        //nineth  Lun 
        ["t0009", "s0001"],
        ["t0009", "s0002"],
        ["t0009", "s0003"],
        ["t0009", "s0004"],

        //tenth Jeudi Samedi
        ["t0010", "s0013"],
        ["t0010", "s0014"],
        ["t0010", "s0015"],
        ["t0010", "s0016"],

        ["t0010", "s0021"],
        ["t0010", "s0022"],
        ["t0010", "s0023"],
        ["t0010", "s0024"],

        //eleventh Mardi Vendredi
        ["t0011", "s0005"],
        ["t0011", "s0006"],
        ["t0011", "s0007"],
        ["t0011", "s0008"],

        ["t0011", "s0017"],
        ["t0011", "s0018"],
        ["t0011", "s0019"],
        ["t0011", "s0020"],
    ]
    const insertOneEnsCren = async (id_ens, id_cren) => {
        await Dispos.create({
            id_ens: id_ens,
            id_cren: id_cren,
        })
    }
    enscrendata.forEach((async (item) => {
        await insertOneEnsCren(item[0], item[1])
    }))
    console.log('dispo inserted')
}
module.exports = insertDispos