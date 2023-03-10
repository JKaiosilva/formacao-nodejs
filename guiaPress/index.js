const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const categoriesControler = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')
const Article = require('./articles/Article')
const Category = require('./categories/Category')



app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


connection
    .authenticate()
    .then(() => {
        console.log('DB conectado')
    }).catch((err) => {
        console.log(err)
    })


app.use('/', categoriesControler)
app.use('/', articlesController)


app.get('/', (req, res) => {
    res.render('index')
})



app.listen(8083, () => {
    console.log('conectado')
})