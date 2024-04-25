import {ProBun} from "probun";

const server = new ProBun({
    routes: "routes",
    port: 3000,
    logger: true
});

server.start();