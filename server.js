const http =require('http');
const app = require('./app');
const mongoConnection = require('./mongo');
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function connect(){
    await mongoConnection();
    server.listen(PORT, ()=> console.log(`listening on port ${PORT}`))
}

connect();



