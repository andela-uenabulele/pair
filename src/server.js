const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const { createServer } = require('http')
const { signUp, login } = require('./controllers/user')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = process.env.PORT || 5000

global.localStorage = {}

// express router can be used here
app.post('/api/signup', signUp)
app.post('/api/login', login)

var server = createServer(app)
server.listen(port, function (err) {
    console.log('Express server listening on port ' + port)
    if (err) console.log(err)
})