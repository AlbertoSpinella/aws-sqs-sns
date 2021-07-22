import {
    listQueues,
    getQueueUrl,
    sendMessage,
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

export const receiveMessageOpts = {
    handler: receiveMessage
};