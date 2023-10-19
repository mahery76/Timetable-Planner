const express = require('express')
const router = express.Router()
const enseignant = require("../controllers/enseignant.controller")

router.get('/enseignant', enseignant.getAllEnseignant)
router.get('/enseignant/:id', enseignant.getOneEnseignant)
router.delete('/enseignant/:id', enseignant.deleteEnseignant)


module.exports = router;



