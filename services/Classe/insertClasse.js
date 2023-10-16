const { sq } = require("../../config/db")
const Classes = require("../../models/Classe")
sq.query("ALTER SEQUENCE classes_id_seq RESTART WITH 1;")
const insertClasse = async () => {

    // delete all records before inserting
    await Classes.destroy({truncate: true, cascade:true})
    const classdata = [
        ["ECO1", 45],
        ["ECO2", 48],
        ["INFO", 23],
        ["AGRO" , 28],
        ["BTP", 25],
    ]
    const insertoneClass = async (a, b) => {
        await Classes.create({
            nom_classe : a, effectif_classe: b,
        })   
    }
    classdata.forEach(async (classe) => {
        await insertoneClass(classe[0], classe[1])
    })
    console.log("classe added")
}
module.exports = insertClasse