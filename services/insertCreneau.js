const Creneaus = require("../models/Creneau")
const { sq } = require("../config/db")

sq.query("ALTER SEQUENCE creneaux_id_seq RESTART WITH 1;")

const insertCreneaus = async () => {
    await Creneaus.destroy({ truncate: true, cascade: true })

    const data = [
        //lundi 1 2 3 4
        ["08:00 - 10:00", "lundi", "cren1"],
        ["10:00 - 12:00", "lundi", "cren2"],
        ["13:00 - 15:00", "lundi", "cren3"],
        ["15:00 - 17:00", "lundi", "cren4"],
        
        //mardi 5 6 7 8
        ["08:00 - 10:00", "mardi", "cren5"],
        ["10:00 - 12:00", "mardi", "cren6"],
        ["13:00 - 15:00", "mardi", "cren7"],
        ["15:00 - 17:00", "mardi", "cren8"],

        //mercredi 9 10 11 12
        ["08:00 - 10:00", "mercredi", "cren9"],
        ["10:00 - 12:00", "mercredi", "cren10"],
        ["13:00 - 15:00", "mercredi", "cren11"],
        ["15:00 - 17:00", "mercredi", "cren12"],

        //jeudi 13 14 15 16
        ["08:00 - 10:00", "jeudi", "cren13"],
        ["10:00 - 12:00", "jeudi", "cren14"],
        ["13:00 - 15:00", "jeudi", "cren15"],
        ["15:00 - 17:00", "jeudi", "cren16"],

        //vendredi 17 18 19 20
        ["08:00 - 10:00", "vendredi", "cren17"],
        ["10:00 - 12:00", "vendredi", "cren18"],
        ["13:00 - 15:00", "vendredi", "cren19"],
        ["15:00 - 17:00", "vendredi", "cren20"],

        //samedi 21 22 23 24
        ["08:00 - 10:00", "samedi", "cren21"],
        ["10:00 - 12:00", "samedi", "cren22"],
        ["13:00 - 15:00", "samedi", "cren23"],
        ["15:00 - 17:00", "samedi", "cren24"]

    ]
    const insertOneCren = async(valeur_cren, jour_cren, nom_cren) => {
        await Creneaus.create({
            valeur_cren: valeur_cren, 
            jour_cren: jour_cren, 
            nom_cren: nom_cren
        })
    }
    data.forEach((cren) => {
        insertOneCren(cren[0], cren[1], cren[2])
    })

    console.log('slots inserted')
}
module.exports = insertCreneaus