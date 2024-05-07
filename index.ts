import {ProBun} from "probun";

const server = new ProBun({
    routes: "routes",
    port: process.env.PORT,
    logger: true
});

server.start();
