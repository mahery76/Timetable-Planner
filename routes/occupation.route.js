const express = require('express')
const router = express.Router()
const occupation = require("../controllers/occupation.controller")
router.get('/genOccupation', occupation.generateOccupation)
router.get('/occupations', occupation.getOccupationsClasse)
router.get('/occupationsEns', occupation.getOccupationsEns)
router.get('/getOEC/:id', occupation.getOccupationsEnsCompte)
router.get('/setPaied/:id', occupation.setToPaiedOccupation)
router.get('/setDone/:id', occupation.setToDoneOccupation)
router.get('/deleteOccupation/:id', occupation.deleteOccupation)
module.exports = router

