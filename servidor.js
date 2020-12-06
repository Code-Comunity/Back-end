const express = require('express')

const routers = require('./routes')
const cors = require('cors');
const path = require('path')
const app = express()
const errors = require('./errors/handle');
const bodyParser = require('body-parser');
    // Configurando express
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        app.use(express.json())
    
    // Tratando cors
    
        app.use(cors())
    
    // tratando pasta de images    
    
        app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
    
    // rotas

        app.use(routers)

    //

        /// app.use(bodyParser)

    //app.use(errors.Error1)
    //app.use(errors.Error2)
    

app.listen(process.env.PORT || 8080, () => console.log(`Servidor`))

