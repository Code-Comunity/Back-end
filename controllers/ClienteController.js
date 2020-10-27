const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')
const axios = require('axios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports ={

    async Create(Request = request,Response = response){

        const dataforms = {nome, email, senha, cep} = Request.body
        
        var data = {nome: nome, email: email, senha:senha}

        const emailBD = await DataBase.knex.select('email').table('clientes').where({email: data.email})
          
        const schema = yup.object().shape({

            nome: yup.string().required(),
            email: yup.string().required().email(),
            senha: yup.string().required().max(9).min(5).trim(),
            cep: yup.string().required().trim(),
            
        })

        try {

            await schema.validate(dataforms,{
                abortEarly:false
            })
            
            const RequestCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((e)=>{return e.data;})

            data.senha = bcrypt.hashSync(senha,10)

            const id = await DataBase.knex.insert(data).into('clientes')
           
            const endereco = [{cep: RequestCep.cep, cidade: RequestCep.localidade, estado: RequestCep.uf, id_Cliente: id}]
            
            await DataBase.knex.insert(endereco).into('endereço')

            
            const token = jwt.sign({    

                id: id,
                nome: dataforms.nome,
                email: dataforms.email,
            },  DataBase.hash,{expiresIn: "1h"})            

            Response.status(200).json(token)
 
        } catch (e) {
            if (e instanceof yup.ValidationError ) {
                const erro = [] 
                e.inner.forEach(err => {
                    erro.push({Campo: err.path, Erro: err.errors})
                })
                Response.json(erro)                    
            }
            
        }


    },
    async ReadAll(Request = request,Response = response){
        
        const data = await DataBase.knex('clientes').select('*')
        
        Response.status(200).json(data)
    },
    async ReadForId(Request = request,Response = response){

        const {id} = Request.params

        const data = await DataBase.knex.select("*").where({id_Cliente: id}).first()

        Response.status(200).json(data)

    },
    async Update(Request = request,Response = response){
        
        const {id} = Request.params

        var {password} = Request.body

        const schema = yup.object().shape({
            password: yup.string().required().length(7).trim()
        })

        schema.validate(password,{
            abortEarly:false
        })

        password = await bcrypt.hash(password,10)

        await DataBase.knex('clientes').where({id_Cliente: id}).update(password)
        
    }        
      

}
