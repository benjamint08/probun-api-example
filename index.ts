import {ProBun} from "probun";

const server = new ProBun({
    routes: "routes",
    // @ts-ignore
    port: process.env.PORT,
    logger: true
});

server.start();