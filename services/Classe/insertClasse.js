const { sq } = require("../../config/db")
const Classes = require("../../models/Classe")
const insertClasse = async () => {
    sq.query("ALTER SEQUENCE classes_id_seq RESTART WITH 1;")

    // delete all records before inserting
    await Classes.destroy({truncate: true, cascade:true})
    const classdata = [
        ["ECO1", 45, 10000],
        ["ECO2", 48, 10000],
        ["INFO", 23, 15000],
        ["AGRO" ,28, 15000],
        ["BTP",  25, 10000],
    ]
    const insertoneClass = async (a, b, c) => {
        await Classes.create({
            nom_classe : a, 
            effectif_classe: b,
            taux_hor: c
        })   
    }
    classdata.forEach(async (classe) => {
        await insertoneClass(classe[0], classe[1], classe[2])
    })
    console.log("classe added")
}
module.exports = insertClasse