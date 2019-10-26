const app = require('./src/app')
const port = 5000

app.listen(port, function(){
    console.log(`APP esta rodando na porta ${port}`)
})