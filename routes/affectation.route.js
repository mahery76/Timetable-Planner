const express = require('express')
const router = express.Router()
const affectation = require("../controllers/affectation.controller")
router.get('/TeacherAffectation/:id', affectation.getTeacherAffectation)
router.get('/GroupAffectation/:id', affectation.getGroupAffectation)
router.get('/Affectation/:id', affectation.getOneAffectation)


module.exports = router;
