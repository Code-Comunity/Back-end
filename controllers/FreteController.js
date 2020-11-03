const { calcularPrecoPrazo } = require("correios-brasil"); 
const {request,response} = require('express')
const {CorreioPac,CorreiosSedex} = require('../configs/delivers')
//  04014 - SEDEX (avista)
//  04510 - PAC - (avista)  

module.exports = {
    
    async CalcularValorPrazo(Request = request,Response = response){
        
        const data = Request.body
        
        const Pac = await CorreioPac(data)
        const Sedex = await CorreiosSedex(data)
        
        console.log(Pac,Sedex)

        Response.json({Pac,Sedex});
    
    }
}