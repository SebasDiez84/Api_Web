const ServicioPostgres = require('../services/postgres')

//Validar la información
let validarLaUrl = simulador => {

    //verifica el campo Url
    if (!simulador.url) {
        throw {
            ok: false,
            mensaje: "La url es un campo obligatorio"
        };
    }
    //verifica el campo Nombre
    if (!simulador.nombre) {
        throw {
            ok: false,
            mensaje: "El nombre es un campo obligatorio"
        };
    }

};

//Guarda la informcaión 
let guardarLaUrl = async simulador => {
    let servicio = new ServicioPostgres()
    let sql = `INSERT INTO public.simuladores(url, nombre, descripcion)
        VALUES (
           '${simulador.url}', '${simulador.nombre}', '${simulador.descripcion}');`;
    let solucion = await servicio.ejecutarSql(sql);
    return solucion;
};

//Consulta la url 
let consultarLaUrl = async () => {
    let servicio = new ServicioPostgres()
    let sql = `SELECT * FROM simuladores`;
    let solucion = await servicio.ejecutarSql(sql);
    return solucion;
};


module.exports = { validarLaUrl, guardarLaUrl, consultarLaUrl}