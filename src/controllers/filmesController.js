const filmes = require('../models/filmes.json')

exports.get = (req , res ) => {
    console.log(req.url)
    res.status(200).send(filmes)
}