module.exports = {

    Render(obj){
        
        const produtos = []
        obj.forEach( produto => {

            produtos.push({
                id: produto.id_produto,
                produto: produto.produto,
                descrisao: produto.descrisao,
                preco: produto.preco,
                estoque: produto.estoque,
                images: `testenode-1.herokuapp.com/uploads/${produto.img}`
            })
        })            
        return produtos
      
    },    
    RenderAll(obj) {
        const produtos = []
        obj.map( produto => {

            produtos.push({
                id: produto.id_produto,
                produto: produto.produto,
                descrisao: produto.descrisao,
                preco: produto.preco,
                estoque: produto.estoque,
                images: `testenode-1.herokuapp.com/uploads/${produto.img}`
            })
        })            
        return produtos
    }
}
