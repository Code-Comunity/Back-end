module.exports = {

    Render(obj){
        
        const produtos = []
        
        
       return obj
      
    },    
    ReadAll(obj) {
        const produtos = []
        obj.forEach( produto => {

            produtos.push({
                id: produto.id_produto,
                produto: produto.produto,
                descrisao: produto.descrisao,
                preco: produto.preco,
                estoque: produto.estoque,
                images: `http://localhost:8080/uploads/${produto.img}`
            })
        })            
        return produtos
    }
}