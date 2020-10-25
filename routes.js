const multer = require('multer')
const path = require("path");
const {Router} = require('express')
const router = Router()
const multerConfig = require('./configs/uploads')

// Rotas de Adm

    const Produto = require('./controllers/ProdutoController');
    

//


    // configuração do multer
        const upload = multer(multerConfig)
    //

    // Rotas

        router.post('/produto',upload.single('images'),Produto.Create)
        router.get('/produto',Produto.Select)
        router.get('/produto/:id',Produto.Select_id)
        router.patch('/produto/:id',upload.single('images'),Produto.Update)
        router.delete('/produto/:id',Produto.Delete)

    //

module.exports = router








