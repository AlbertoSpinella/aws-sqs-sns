import {
    listQueuesOpts,
    getQueueUrlOpts,
    sendMessageOpts,
    receiveMessageOpts
} from "./schema.js";

export const sqsPlugin = (fastify, options, done) => {
    try {
        fastify.get("/listQueues", listQueuesOpts);
        fastify.post("/getQueueUrl", getQueueUrlOpts);
        fastify.post("/sendMessage", sendMessageOpts);
        fastify.post("/receiveMessage", receiveMessageOpts);

        done();
    } catch (err) {
        throw err;
    }
};