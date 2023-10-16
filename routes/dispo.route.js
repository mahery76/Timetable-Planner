const express = require('express')
const router = express.Router()
const dispo = require("../controllers/dispo.controller")

router.get('/dispo', dispo.getAlldispos)

// not taken but useful for delete and post route
router.get('/dispo/:id', dispo.getOneDispo)


module.exports = router;