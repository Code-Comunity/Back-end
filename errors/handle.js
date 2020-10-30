module.exports = {

    Erro1(req,res,next){
        
        res.status(404)
        res.json({Error_Status: 404,Message:"Not Found"})
           
    },
    Error2(err, req, res, next){
     
        res.status(err.status || 500)
        res.json({
            Erro:{
                status: err.status || 500,
                message: "Erro interno"
            }
        })
    
    }
}
