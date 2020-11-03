const { calcularPrecoPrazo } = require("correios-brasil"); 
const {RenderPac,RenderSedex} = require("../views/Frete-views")
   
async function CorreioPac(data,Sedex){
        
    var Objeto = {
        sCepOrigem: "42338590",
        sCepDestino: data.cep,
        nVlPeso:  0,
        nCdFormato:  3,
        nVlComprimento:  0,
        nVlAltura:  0,
        nVlLargura:  0,
        nCdServico:  Sedex === true ? '04014':'04510',
        nVlDiametro:  0,
    }

    data.medidas.forEach(medidas =>{

        if (Objeto.nVlAltura < medidas.altura) {
            Objeto.nVlAltura =+ medidas.altura    
        }
        if(Objeto.nVlComprimento < medidas.comprimento) {
            Objeto.nVlComprimento = medidas.comprimento  
        }
        if(Objeto.nVlLargura < medidas.largura) {
            Objeto.nVlLargura = medidas.largura
        }

        Objeto.nVlPeso += medidas.peso 
    })
    
    try {
        const data = await calcularPrecoPrazo(Objeto)
        
        return Sedex == true ? RenderSedex(data): RenderPac(data)

    } catch (error) {
        console.error(error)
    }
    
    return 
}

async function CorreiosSedex(data){return CorreioPac(data,true)}


    module.exports ={
        CorreioPac,
        CorreiosSedex
    }