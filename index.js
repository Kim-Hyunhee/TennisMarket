let server = require("./server");
let router = require("./route");
let requestHandler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
mariadb.connect();

server.start(router.route, requestHandler.handle);
