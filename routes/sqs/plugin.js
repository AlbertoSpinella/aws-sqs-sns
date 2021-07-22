import {
    listQueuesOpts,
    getQueueUrlOpts,
    sendMessageOpts,
    receiveMessageOpts,
    listStoredMessagesOpts
} from "./schema.js";

export const sqsPlugin = (fastify, options, done) => {
    try {
        fastify.get("/listQueues", listQueuesOpts);
        fastify.post("/getQueueUrl", getQueueUrlOpts);
        fastify.post("/sendMessage", sendMessageOpts);
        fastify.post("/receiveMessage", receiveMessageOpts);
        fastify.get("/listStoredMessages", listStoredMessagesOpts);

        done();
    } catch (err) {
        throw err;
    }
};