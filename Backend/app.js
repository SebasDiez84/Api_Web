// Inicializando las librerias
const server = express();
server.use(express.json());

// Definiendo constantes
server.get("/",(req, resp) => {
    resp.send("Hola, bienvenido a la API simulador")
})

// Importando rutas con los endpoint
const rutasSimuladores = require('./routes/routers')
server.use(rutasSimuladores); 

// Difiniendo puerto 
const port = 3000

// Levantando servidor para el puerto
server.listen(port, "127.0.0.1", () => {
    console.log('En desarrollo');
})