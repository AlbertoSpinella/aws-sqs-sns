import {
    listQueuesOpts,
    getQueueUrlOpts,
    sendMessageOpts,
    sendMessageFifoOpts,
    receiveMessageOpts
} from "./schema.js";

export const sqsPlugin = (fastify, options, done) => {
    try {
        fastify.get("/listQueues", listQueuesOpts);
        fastify.post("/getQueueUrl", getQueueUrlOpts);
        fastify.post("/sendMessage", sendMessageOpts);
        fastify.post("/sendMessageFifo", sendMessageFifoOpts);
        fastify.post("/receiveMessage", receiveMessageOpts);

        done();
    } catch (err) {
        throw err;
    }
};