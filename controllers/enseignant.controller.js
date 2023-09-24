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