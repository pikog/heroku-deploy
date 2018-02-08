//Import packages
const express = require('express')
const hbs = require('hbs')

//Init express
const app = express()

//Port for Heroku
app.set('port', (process.env.PORT || 8080))

//Express configuration
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use('/static', express.static(__dirname + '/public'))

//Main route
app.get('/', (req, res) =>
{
    res.render('pages/home.hbs', { 
        port: app.get('port'),
        gmaps_key: process.env.GMAPS_KEY
    })
})

//Listen on heroku port
app.listen(app.get('port'), () =>
{
    console.log(`App started on port ${app.get('port')}`)
})