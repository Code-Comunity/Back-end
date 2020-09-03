const express = require('express');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');
const path = require("path")
const cadastro = require('./controllers/cadastro')
const listar = require('./controllers/listar')
const login = require('./controllers/login')
const produtos = require('./users/produtos')
const app = express()


    // configuração do BodyParser.
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    //

    // Configuração do Handlebars.
    app.engine('handlebars',handlebars({defaultLayaut: 'main'}))
    app.set('view engine','handlebars');
    //

    // path.
    

    //

    // Midwares.


    //
    

    // Rotas de testes. 

        app.use('/cadastro',cadastro);
        app.use('/listar',listar);
        app.use('/login',login);
        app.use('/produtos',produtos)

    //

    // outros.
        module.exports = app;
    //





