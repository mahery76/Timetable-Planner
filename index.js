const express = require("express")
const syncModels = require("./functions/sync")
const cors = require("cors")
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Enseignantsroute = require('./routes/enseignant.route')
const DisposRoute = require('./routes/dispo.route')
const AffectationsRoute = require('./routes/affectation.route')
const ClasseRoute = require('./routes/classe.route')
const CreneauRoute = require('./routes/creneau.route')
const OccupationRoute = require('./routes/occupation.route')
app.use('/api', Enseignantsroute)
app.use('/api', DisposRoute)
app.use('/api', AffectationsRoute)
app.use('/api', ClasseRoute)
app.use('/api', CreneauRoute)
app.use('/api', OccupationRoute)

const runServer = async () => {
    try {   
        await syncModels()
        
        app.listen(3001, () => {
            console.log('server running on port 3001')
        })
    } catch (err) {
        console.log(err)
    }
} 

runServer()



