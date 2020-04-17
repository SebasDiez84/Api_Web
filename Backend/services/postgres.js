const { Pool } = require("pg");

class ServicioPostgres {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "apiSimulador",
      password: "",
      port: 5432,
        });
}
async ejecutarSql(sql) {
    let solucion = await this.pool.query(sql);
    return solucion;
  }
}

module.exports = ServicioPostgres;
