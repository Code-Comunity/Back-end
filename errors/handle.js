const yup = require('yup')

module.exports = {

    Error1(req,res,next){
        const err = new Error("Pagina não encontrado")
        err.status = 404
        next(err)
    },
    Error2(err, req, res, next){
        
        if (err instanceof yup.ValidationError ) {
            
            console.log(err);
      
        } else {
                
        res.status(err.status || 500)
        
        res.json({
            Erro:{
                status: err.status || 500,
                message: "Erro interno"
            }
        })
    }
    
    }
}
