// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    then(() => {console.log ('connected to mongo:', process.env.MONGO_URI )})


module.exports.Place = require('./models/places')

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    //res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.render('error404')
    //res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT)


