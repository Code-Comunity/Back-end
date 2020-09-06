const express = require('express');
const router = express.Router();
const DataBase = require("../../configs/DataBases")


router.get('/', async(req, res) => {
  
    const produtos = await DataBase.knex.select('').table('produtos').innerJoin('imagens','imagens.id_produto','produtos.id_produto')

    if (produtos.length < 1) {

        res.send({Mensagem: "Erro ao listar produtos"});

    } else {
        
        res.send(produtos)


    }


}) 








module.exports = router;    