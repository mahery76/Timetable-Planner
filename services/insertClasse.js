const { sq } = require("../config/db")
const Classes = require("../models/Classe")
sq.query("ALTER SEQUENCE classes_id_seq RESTART WITH 1;")
const insertClasse = async () => {

    // delete all records before inserting
    await Classes.destroy({truncate: true, cascade:true})
    const classdata = [
        ["TCO",20],
        ["GI",25],
        ["BTP",35],
        ["ECO",22],
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