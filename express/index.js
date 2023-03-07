const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ola')
})

app.get('/blog/:artigo?', (req, res) => {
    var artigo = req.params.artigo;
    if(artigo){
        res.send('artigo ' +artigo)
    }else{
        res.send('bem vindo')
    }
})


app.get('/canal/youtube', (req, res) => {
    var canal = req.query['canal']
    res.send(canal)
})

app.get('/ola/:nome/:empresa', (req, res) => {
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send('ola ' + nome +' '+ empresa)
})

app.listen(8181, function(erro){
    if(erro){
        console.log('erro')
    }else{
        console.log('servidor rodando')
    }
})

