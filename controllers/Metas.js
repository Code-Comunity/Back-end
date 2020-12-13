const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')
const {Render,RenderAll} = require('../views/Produto-Views')

module.exports ={
  async Create(){
    
         const {
            titulo,
            descricao,
            valor,
        } = Request.body  
        
        
        const data = {
            id:0,
            titulo,
            descricao,
            valor,
        }
  
     await DataBase.knex.insert(data).into('metas')
           
     return Response.status(201).json({message: 'Success'})
  }
}
