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
            if (err) res.status(500).send(err);
            else res.send(data);
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
            if (err) res.status(500).send(err);
            else res.send(data);
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
            if (err) res.status(500).send(err);
            else res.send(data);
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
        sqs.receiveMessage(params, (err, data) => {
            if (err) res.status(500).send(err);
            else res.send(data);
        });
    } catch (err) {
        throw err;
    }
};