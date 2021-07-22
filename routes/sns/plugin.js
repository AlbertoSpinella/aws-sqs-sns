import {
    publishOpts
} from "./schema.js";

export const snsPlugin = (fastify, options, done) => {
    try {
        fastify.get("/publish", publishOpts);

        done();
    } catch (err) {
        throw err;
    }
};