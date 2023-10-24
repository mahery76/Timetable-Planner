const express = require('express')
const router = express.Router()
const troncCommun = require("../controllers/troncCommun.controller")
router.get('/troncCommun', troncCommun.getAllTroncCommun)

module.exports = router;
