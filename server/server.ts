import bodyParser from 'body-parser';
import express, { Application } from 'express'

const newUserRoute = require('./src/routes/newUserRoute')
const newAlleycatRoute = require('./src/routes/newAlleycatRoute')

const app: Application = express();

app.use(bodyParser.json());

app.use(newUserRoute)
app.use(newAlleycatRoute)

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
