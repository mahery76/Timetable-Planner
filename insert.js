const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/testdb")
const  { creneau } = require("./models/Models")
console.log(creneau)
creneau.insertMany({})

