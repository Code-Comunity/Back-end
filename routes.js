const multer = require('multer')
const path = require("path");
const {Router} = require('express')
const router = Router()
const multerConfig = require('./configs/uploads')

// Rotas 
    const Login = require('./controllers/loginController')

    const Produto = require('./controllers/ProdutoController');
    const Cliente = require('./controllers/ClienteController')
    
    const pagarme = require('./controllers/PagarmeController')
    
    
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

        router.post('/pagarme-cartao',pagarme.PagamentoCartao)
        router.post('/pagarme-sacar',pagarme.Sacar) ///----rota não testada----///
        router.post('/pagarme-total',pagarme.Total) ///----rota não testada----///

        // proximas rotas //

        // router.post('/frete',frete)

        // router.post('/pedido',pedido) 
        // router.get('/pedido',pedido) 



    //

  
    




module.exports = router








