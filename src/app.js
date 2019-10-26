const express = require('express')
const app = express()

const index = require('./routes/index')
//const filmes = require('./routes/filmesRoute')

app.use(function(){
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "Origin, X-Request-With, Content-Type, Accept")
    next()
})

app.use('/' , index)
//app.use('/filmes' , flimes)

module.exports = app