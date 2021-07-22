import server  from "fastify";
const fastify = server();
import fastifySwagger from "fastify-swagger";
import { sqsPlugin } from "./routes/sqs/plugin.js";

fastify.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "checksig-api" }
    },
});

fastify.register(sqsPlugin, {
    prefix: "/sqs"
});


const PORT = 3000;

const start = async () => {
    try {
        console.log(`Server starting...`);
        console.log(`Swagger can be found at http://localhost:${PORT}/docs`)
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);      
    }
};

start();