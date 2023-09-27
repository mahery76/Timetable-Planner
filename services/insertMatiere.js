const {sq} = require("../config/db")
const Matieres = require("../models/Matiere")
sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")

const insertMatieres = async () => {
    await Matieres.destroy({ truncate: true, cascade: true })
    const cdata = [
        ["compta"],
        ["anglais"],
        ["reseaux"],
        ["algo"],
        ["elec"],
        ["algebre"],
        ["rdm"],
        ["stat"],
    ]
    const insertOneMatiere = async (a) => {
        await Matieres.create({
            nom_matiere: a,
        })
    }
    cdata.forEach(async(element) => {
        insertOneMatiere(element[0])
    });
    console.log('matiere added')

}
module.exports = insertMatieres
