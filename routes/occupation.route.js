const express = require('express')
const router = express.Router()
const occupation = require("../controllers/occupation.controller")
router.get('/genOccupation', occupation.generateOccupation)
router.get('/getOEC/:id', occupation.getOccupationsEnsCompte)
module.exports = router