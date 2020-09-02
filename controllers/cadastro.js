const express = require('express');
const router = express.Router();
const DataBase = require("../configs/DataBases")
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');

router.post('/', async function(req,res){

    // validações - incompleto.

        const erros = []          
            if (!req.body.cep || !req.body.email || !req.body.nome || !req.body.senha)  {
            erros.push({ mensagem:"Informe os dados corretamente"})    
        }
                    
        if (req.body.cep.length != 8 ){erros.push({ mensagem:"cep inválido"})}  
                
        if(erros.length > 0){ res.send({erros: erros})}else{
   
    //                
                    
    // Obitendo endereço.
        
        const cep = await fetch(`https://viacep.com.br/ws/${req.body.cep}/json/`).then(res => res.json())
                
    //      
    
    //  tratando possíveis erros do CEP.
     
        if (cep.erro == true) {
                
    //

        }else{

    // Encriptando senha.         
        const hash = bcrypt.hashSync(req.body.senha,10);
    // 
        
  
    // Realizando insert.

        const cliente = [{nome: req.body.nome, email: req.body.email, senha: hash}]

        const idCliente = await DataBase.knex.insert(cliente).into("clientes");
                    
        const endereço = [{cep: cep.cep,cidade: cep.localidade,estado: cep.uf,idCliente: idCliente}]
                
        const idEndereco = await DataBase.knex.insert(endereço).into("endereço");
                
    //            

    }
  }
})
module.exports = router;


