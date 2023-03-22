const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const categoriesControler = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')
const Article = require('./articles/Article')
const Category = require('./categories/Category')
const usersController = require('./users/UserControler')
const User = require('./users/User')
const session = require('express-session')



app.use(session({
    secret: 'qualquercoisa', cookie: { maxAge: 30000 }
}))

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
app.use('/', usersController)


app.get('/session', (req, res) => {
    
})

app.get('/leitura', (req, res) => {

})


app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', {articles: articles, categories: categories})
        })
    })
})

app.get('/:slug', (req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined) {
            Category.findAll().then(categories => {
                res.render('article', {article: article, categories: categories})
            })
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})


app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories})
            })
        }else {
            res.redirect('/')
        }
    }).catch( err => {
        res.redirect('/')
    })
})

app.listen(8083, () => {
    console.log('conectado')
})