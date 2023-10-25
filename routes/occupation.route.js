const express = require('express')
const router = express.Router()
const occupation = require("../controllers/occupation.controller")
router.get('/genOccupation', occupation.generateOccupation)
router.get('/occupations/:id', occupation.getOccupationsClasse)
router.get('/getOEC/:id', occupation.getOccupationsEnsCompte)
router.get('/setPaied/:id', occupation.setToPaiedOccupation)
router.get('/setDone/:id', occupation.setToDoneOccupation)
module.exports = router

