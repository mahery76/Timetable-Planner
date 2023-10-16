const {sq} = require("../../config/db")
const Tronc_communs = require("../../models/TroncCommun")
sq.query("ALTER SEQUENCE tronc_communs_id_seq RESTART WITH 1;")

const insertTroncCommun = async () => {
    await Tronc_communs.destroy({truncate: true, cascade: true})
    const data = [
        ["TC1"],
        ["TC2"],
        ["TC3"],
        ["TC4"],
        ["TC5"],
    ]
    const insertOneTroncCommun = async (a) => {
        await Tronc_communs.create({
            nom_tronc_commun: a
        })
    }
    data.forEach(async(el) => {
        insertOneTroncCommun(el[0])
    });
    console.log('tronc commun added')
}

module.exports = insertTroncCommun

