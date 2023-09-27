const { sq } = require("../config/db")
const Dispos = require("../models/Dispo")

sq.query("ALTER SEQUENCE dispos_id_seq RESTART WITH 1;")

const insertDispos = async () => {
    await Dispos.destroy({ truncate: true, cascade: true })

    const enscrendata = [
        // first teacher lundi mercredi
        ["s0001", "t0001"],
        ["s0002", "t0001"],
        ["s0003", "t0001"],
        ["s0004", "t0001"],

        ["s0009", "t0001"],
        ["s0010", "t0001"],
        ["s0011", "t0001"],
        ["s0012", "t0001"],

        // second teacher  mardi mercredi        
        ["s0005", "t0002"],
        ["s0006", "t0002"],
        ["s0007", "t0002"],
        ["s0008", "t0002"],

        ["s0009", "t0002"],
        ["s0010", "t0002"],
        ["s0011", "t0002"],
        ["s0012", "t0002"],

        // third teacher  mardi jeudi
        ["s0005", "t0003"],
        ["s0006", "t0003"],
        ["s0007", "t0003"],
        ["s0008", "t0003"],

        ["s0013", "t0003"],
        ["s0014", "t0003"],
        ["s0015", "t0003"],
        ["s0016", "t0003"],

        // fourth teacher  jeudi vendredi 
        ["s0013", "t0004"],
        ["s0014", "t0004"],
        ["s0015", "t0004"],
        ["s0016", "t0004"],

        ["s0017", "t0004"],
        ["s0018", "t0004"],
        ["s0019", "t0004"],
        ["s0020", "t0004"],

        // fifth teacher  vendredi samedi
        ["s0017", "t0005"],
        ["s0018", "t0005"],
        ["s0019", "t0005"],
        ["s0020", "t0005"],

        ["s0021", "t0005"],
        ["s0022", "t0005"],
        ["s0023", "t0005"],
        ["s0024", "t0005"],
    ]
    const insertOneEnsCren = async (id_cren, id_ens) => {
        await Dispos.create({ id_cren: id_cren, id_ens: id_ens })
    }
    enscrendata.forEach((async (item) => {
        await insertOneEnsCren(item[0], item[1])
    }))
    console.log('dispo inserted')
}
module.exports = insertDispos