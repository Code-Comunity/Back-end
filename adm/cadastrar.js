const express = require('express')
const router = express.Router();
const DataBase = require("../configs/DataBases")


// Rota para criar um produto novo. // (incompleto*)

    router.post('/',async (req,res)=>{


        const produto = [
            {
                produto: req.body.name,
                descrisao: req.body.descrisao,
                preco: req.body.preco,
                estoque: req.body.estoque
            }
        ]
 
        
        const idProduto = await DataBase.knex.insert(produto).into('produtos')   


        if (idProduto < 1) {
            res.send({mensagem: "Erro ao cadastrar produto no banco de dados"})
        } else {

            const imagens = [
                
            ] ///// continuar ...............


            const idImagens = await DataBase.knex.insert()
        }


    })
//







module.exports = router;
