const { router } = require("json-server");

const jsonServer = requiere("json-server");
const server = jsonServer.create();
const router = jsonServer-router("almacen.json");
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);
server.listen(port);