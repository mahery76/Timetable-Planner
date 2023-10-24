const express = require('express')
const router = express.Router()
const salle = require("../controllers/salle.controller")
router.get('/salle', salle.getAllSAlle)

module.exports = router;

