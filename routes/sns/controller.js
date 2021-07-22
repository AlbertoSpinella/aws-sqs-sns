import dotenv from "dotenv";
dotenv.config();

import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});

const sns = new AWS.SNS({ apiVersion: "2021-11-05" });

export const publish = (req, res) => {
    try {
        const params = {
            Message: "Messaggio di prova!",
            TopicArn: "arn:aws:sns:eu-central-1:201448095557:n_ps"
        }

        sns.publish(params, (err, data) => {
            if (err) return console.log("ERR", err);
            return console.log("DATA", data);
        });

    } catch (err) {
        throw err;
    }
};