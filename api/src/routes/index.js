const { Router } = require('express'); 

// Importar todos los routers;
const Countries = require('./Countries')
const Activity = require('./Activity')


const router = Router();
  

// Configurar los routers
router.get('/', (req, res) =>{ 
    res.send("INICIOOO")
});

router.use('/countries',Countries);
router.use('/activity',Activity);


module.exports = router;
