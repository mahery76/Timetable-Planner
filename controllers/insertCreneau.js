const Creneaus = require("../models/Creneau")
const { sq } = require("../config/db")

sq.query("ALTER SEQUENCE creneaux_id_seq RESTART WITH 1;")

const insertCreneaus = async () => {
    await Creneaus.destroy({ truncate: true, cascade: true })
    //lundi 1 2 3 4
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "lundi", nom_cren: "cren1" }) //0
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "lundi", nom_cren: "cren2" }) //1  
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "lundi", nom_cren: "cren3" }) //2
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "lundi", nom_cren: "cren4" }) //3 

    //mardi 5 6 7 8
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "mardi", nom_cren: "cren5" }) //4
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "mardi", nom_cren: "cren6" }) //5
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "mardi", nom_cren: "cren7" }) //6
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "mardi", nom_cren: "cren8" }) //7

    //mercredi  9 10 11 12
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "mercredi", nom_cren: "cren9" }) //8
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "mercredi", nom_cren: "cren10" }) //9
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "mercredi", nom_cren: "cren11" }) //10
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "mercredi", nom_cren: "cren12" }) //11

    //jeudi 13 14 15 16
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "jeudi", nom_cren: "cren13" }) //12
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "jeudi", nom_cren: "cren14" }) //13
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "jeudi", nom_cren: "cren15" }) //14
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "jeudi", nom_cren: "cren16" }) //15

    //vendredi 17 18 19 20
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "vendredi", nom_cren: "cren17" }) //16
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "vendredi", nom_cren: "cren18" }) //17
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "vendredi", nom_cren: "cren19" }) //18
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "vendredi", nom_cren: "cren20" }) //19

    //samedi 21 22 23 24                                                                                                               //samedi
    await Creneaus.create({ valeur_cren: "08:00 - 10:00", jour_cren: "samedi", nom_cren: "cren21" }) //20
    await Creneaus.create({ valeur_cren: "10:00 - 12:00", jour_cren: "samedi", nom_cren: "cren22" }) //21
    await Creneaus.create({ valeur_cren: "13:00 - 15:00", jour_cren: "samedi", nom_cren: "cren23" }) //22
    await Creneaus.create({ valeur_cren: "15:00 - 17:00", jour_cren: "samedi", nom_cren: "cren24" }) //23

    console.log('slots inserted')
}
module.exports = insertCreneaus