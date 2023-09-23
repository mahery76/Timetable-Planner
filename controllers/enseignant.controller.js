const Enseignants = require("../models/Enseignant");
// Create a new user
exports.createEnseignants = (req, res) => {
    console.log(req.body)
    const enseignant1 = req.body
    Enseignants.create(enseignant1)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating role."
            })
        })

    // console.log(req.body)
    // try {
    //     const enseignant1 = req.body
    //     const data = await Enseignants.create(enseignant1)
    //     res.send(data)
    // } catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "some err..."
    //     })
    // }
}
exports.ens1 = Enseignants.create({
    nom_ens: "Dr Andriamapandry Josephin",
    coordonnees: "034 25 565 48",
    email_ens: "josephin@gmail.com",
    taux_hor: 20000
})
exports.ens2 = Enseignants.create({
    nom_ens: "Mr Augustin",
    coordonnees: "034 25 565 48",
    email_ens: "josephin@gmail.com",
    taux_hor: 10000
})
exports.ens3 = Enseignants.create({
    nom_ens: "Dr Eric",
    coordonnees: "034 25 565 48",
    email_ens: "josephin@gmail.com",
    taux_hor: 20000
})
exports.ens4 = Enseignants.create({
    nom_ens: "Dr Nirina",
    coordonnees: "034 25 565 48",
    email_ens: "josephin@gmail.com",
    taux_hor: 20000
})
exports.ens5 = Enseignants.create({
    nom_ens: "Mr Andry",
    coordonnees: "034 25 565 48",
    email_ens: "josephin@gmail.com",
    taux_hor: 10000
})





