const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./dataBase/dataBase')
const Pergunta = require('./database/Pergunta');



connection
    .authenticate()
    .then(() => {
        console.log('conectado')
    })
    .catch((err) => {
        console.log(err)
    })


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then((perguntas => {
        console.log(perguntas)
        res.render('index', {perguntas: perguntas})

    }))
})


app.get('/perguntar', (req, res) =>{
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})




app.listen(8082, () => {
    console.log('servidor on')
})