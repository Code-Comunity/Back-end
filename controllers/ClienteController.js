const {request,response} = require('express')
const DataBase = require("../configs/DataBases")
const yup = require('yup')
const axios = require('axios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports ={
    async Create(Request = request,Response = response){

        const { name, email, password, cep,  } = Request.body

        var data = { name,  email, password, cep }

        const schema = yup.object().shape({

            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required().length(7).trim(),
            cep: yup.string().required().trim(),
            
        })

        schema.validate(data,{
            abortEarly:false
        })

        try {
            
            data.password = bcrypt.hashSync(password,10)
 
            const id = await DataBase.knex.insert(data).into("clientes")
            
            const cep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((e)=>{return e.data;})

            const endereco = [{cep: cep.cep, cidade: cep.localidade, estado: cep.uf, id_Cliente: id}]

            const token = jwt.sign({

                id: idCliente,
                nome: cliente.nome,
                email: cliente.email,
            },  DataBase.hash,{expiresIn: "1h"})            

        } catch (e) {
            Error()
        }


    },
    async Select(Request = request,Response = response){

    },
    async Select_id(Request = request,Response = response){

    },
    async Update(Request = request,Response = response){
        
    },

}