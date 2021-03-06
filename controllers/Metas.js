const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')
const {Render,RenderAll} = require('../views/Produto-Views')

module.exports ={
  async Create(Request = request,Response = response){
    
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
  },
  
  async Delete(Request = request,Response = response){
        
        const {id} = Request.params

        await DataBase.knex.table('metas').where({id: id}).delete()

        return Response.status(200).json({message: 'Deletado com sucesso'})
    },
    async Index(Request = request,Response = response){
    const metas = await DataBase.knex.select().table('metas')
        
        Response.status(200).json({metas})
  }
}
