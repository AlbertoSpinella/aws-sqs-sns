import {
    listQueues,
    getQueueUrl,
    sendMessage,
    sendMessageFifo,
    receiveMessage
} from "./controller.js";

export const listQueuesOpts = {
    handler: listQueues
};

export const getQueueUrlOpts = {
    handler: getQueueUrl
};

export const sendMessageOpts = {
    handler: sendMessage
};

export const sendMessageFifoOpts = {
    handler: sendMessageFifo
};

export const receiveMessageOpts = {
    handler: receiveMessage
};