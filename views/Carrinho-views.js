module.exports = {

    RenderAll(data){
        
        const Carrinho = data.map(data => {
            return ({

                id: data.id,
                produto: data.produto,
                descrisao: data.descrisao,
                preco_unitario: data.preco,
                quantidade: data.quantidade,
                images: `https://testenode-1.herokuapp.com/uploads/${dada.img}`

            })
        })

        return Carrinho
    }
}
