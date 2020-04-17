const express = require('express')
const router = express.Router()

const controlador = require("../controllers/simulador");


//Consulta el simulador
router.get('/simulador', (req, resp) => {
    controlador.consultarUrl().then(responderDB =>{
        let registros = responderDB.rows;
        resp.send({ok: true, info: registros, mensaje: 'El simulador fue consultado'});
    }).catch(error =>{
        resp.send(error);
    })
});

//Guarda el simulador
router.post("/simulador", (req, resp) => {
    try {
        let info_marcador = req.body;
        controlador.validarUrl(info_marcador);
        controlador.guardarUrl(info_marcador).then(respuestaDB => {
            resp.send({ok: true, mensaje: "El simulador fue guardado"});
        }).catch(error => {
            resp.send(error);
        }); 
    } catch (error) {
        resp.send(error);
    }
});


module.exports = router;