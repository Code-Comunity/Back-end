const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')



module.exports ={

    async Create(Request = request,Response = response){
                
        
        const {
            produto,
            descrisao,
            preco,
            estoque,
        } = Request.body  
        
        const ResquestImages = Request.file
       
        

        const data = {
            produto,
            descrisao,
            preco,
            estoque,
            img: ResquestImages.filename
        }
        
        const schema = yup.object().shape({

            produto: yup.string().required(),
            descrisao: yup.string().required(),
            preco: yup.number().required(),
            estoque: yup.number().required(),
            img: yup.string().required(),

        })

        await schema.validate(data,{
            abortEarly:false
        })

        await DataBase.knex.insert(data).into('produtos')
           
        return Response.status(201).json(data)
           
    },

    async ReadAll(Request = request,Response = response){
          
        const produtos = await DataBase.knex.select().table('produtos')
        
        Response.status(200).json(produtos)
      
    },

    async ReadForId(Request = request,Response = response){
    
        const {id} = Request.params
    
        const produto = await DataBase.knex.select().table('produtos').where('id_produto',id)
        
        return Response.status(200).json(produto)

    },

    async Update(Request = request,Response = response){

        const {
            produto,
            descrisao,
            preco,
            estoque,
        } = Request.body  
        
        const ResquestImages = Request.file
       
        const data = {
            produto,
            descrisao,
            preco,
            estoque,
            image: ResquestImages
        }
        
        const schema = yup.object().shape({

            produto: yup.string().required(),
            descrisao: yup.string().required(),
            preco: yup.number().required(),
            estoque: yup.number().required(),
            image: yup.string().required

        })

        await schema.validate(data,{
            abortEarly:false
        })

        const {id} = Response.params

        await DataBase.knex('produtos').where({id_produto: id}).update(data)

    },

    async Delete(Request = request,Response = response){
        
        const {id} = Request.params

        await DataBase.knex.table('produtos').where({id_produto: id}).delete()

        return Response.status(200).json()
    }

}



