const express = require('express')
const DataBase = require("../configs/DataBases")
const router = express.Router();

    router.post('/',async function(req,res){
        
        const clientes = await DataBase.knex.select('clientes.ID','clientes.nome','clientes.email','endereço.cep','endereço.cidade','endereço.estado').table('clientes').innerJoin('endereço','endereço.idCliente','clientes.ID')
        res.send(clientes)
        console.log(clientes);
    })

module.exports = router    