const { Pool } = require("pg");

class ServicioPostgres {
  constructor() {
    this.pool = new Pool({
         "url": "localhost",
         "nombre": "Api",
         "descripcion": ""
        });
}
async ejecutarSql(sql) {
    let solucion = await this.pool.query(sql);
    return solucion;
  }
}

module.exports = ServicioPostgres;
