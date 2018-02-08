//Import packages
const express = require('express')
const hbs = require('hbs')

//Init express
const app = express()

//Port for Heroku
const PORT = process.env.PORT || 8080

//Express configuration
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use('/static', express.static(__dirname + '/public'))

//Main route
app.get('/', (req, res) =>
{
    res.render('pages/home.hbs', { port: PORT })
})

//Listen on heroku port
app.listen(PORT, () =>
{
    console.log(`App started on port ${PORT}`)
})