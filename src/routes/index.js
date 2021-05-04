const { Router } = require("express"); //nuevas rutas para el servidor
const router = Router();


//routes
router.get('/test',(req, res) =>{
    const data = {
        "name": "AJK",
        "alias": "alentrus"
    };
    res.json(data);
})

module.exports = router;
