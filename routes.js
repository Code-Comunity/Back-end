const multer = require('multer')
const path = require("path");
const {Router} = require('express')
const router = Router()
const multerConfig = require('./configs/uploads')

// Rotas 

    const Produto = require('./controllers/ProdutoController');
    const Cliente = require('./controllers/ClienteController')
    
    const Login = require('./controllers/loginController')
    
//


    // configuração do multer
        const upload = multer(multerConfig)
    //

    // Rotas

        router.post('/login-Admin',Login.LoginAdmin)
        router.post('/login',Login.LoginClient)
        
        router.post('/cliente',Cliente.Create)
        router.get('/cliente',Cliente.ReadAll)
        router.get('/cliente/:id',Cliente.ReadForId)
        router.patch('/cliente/:id',Cliente.Update)
        
        router.post('/produto',upload.single('images'),Produto.Create)
        router.get('/produto',Produto.ReadAll)
        router.get('/produto/:id',Produto.ReadForId)
        router.patch('/produto/:id',upload.single('images'),Produto.Update)
        router.delete('/produto/:id',Produto.Delete)



    //

module.exports = router








