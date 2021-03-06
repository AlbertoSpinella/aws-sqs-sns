import dotenv from "dotenv";
dotenv.config();

import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});

const sqs = new AWS.SQS({ apiVersion: "2021-11-05" });

export const listQueues = (req, res) => {
    try {
        sqs.listQueues({}, (err, data) => {
            if (err) return res.status(500).send({listQueuesErr: err});
            return res.send(data);
        });
    } catch (err) {
        throw err;
    }
};

export const getQueueUrl = (req, res) => {
    try {
        const { QueueName } = req.body;
        const params = {
            QueueName
        }
        sqs.getQueueUrl(params, (err, data) => {
            if (err) return res.status(500).send({getQueueUrlErr: err});
            return res.send(data);
        });
    } catch (err) {
        throw err;
    }
};

export const sendMessage = (req, res) => {
    try {
        const { QueueUrl, MessageAttributes, MessageBody } = req.body;
        const params = {
            QueueUrl,
            MessageAttributes,
            MessageBody
        }
        sqs.sendMessage(params, (err, data) => {
            if (err) return res.status(500).send({sendMessageErr: err});
            return res.send({sentData: data});
        });
    } catch (err) {
        throw err;
    }
};

export const sendMessageFifo = (req, res) => {
    try {
        const { QueueUrl, MessageGroupId, MessageAttributes, MessageBody } = req.body;
        const params = {
            QueueUrl,
            MessageGroupId,
            MessageAttributes,
            MessageBody
        }
        sqs.sendMessage(params, (err, data) => {
            if (err) return res.status(500).send({sendMessageErr: err});
            return res.send({sentData: data});
        });
    } catch (err) {
        throw err;
    }
};

export const receiveMessage = (req, res) => {
    try {
        const { MessageAttributeNames, QueueUrl } = req.body;
        const params = {
            MessageAttributeNames,
            QueueUrl
        }
        sqs.receiveMessage(params, async (err, data) => {
            if (err) return res.status(500).send({receiveMessageErr: err});
            if (data.Messages != undefined) {
                const deleteParams = {
                    QueueUrl,
                    ReceiptHandle: data.Messages[0].ReceiptHandle
                };

                console.log({message: data.Messages[0]});

                return sqs.deleteMessage(deleteParams, (delErr, delData) => {
                    if (delErr) return res.status(500).send({deleteMessageErr: delErr});
                    return res.send({deletedData: delData});
                });
            }
            return res.status(500).send("Unable to delete");
        });
    } catch (err) {
        throw err;
    }
};