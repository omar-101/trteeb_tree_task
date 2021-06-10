'use strict';
const rootPath = process.cwd(),
    dotenv = require('dotenv-flow');

dotenv.config({ path: `${rootPath}/envs` });
const port = process.env.PORT;
const dbConnectionString = process.env.NODE_ENV === "production" ?
    process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD) : process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;



module.exports = {
    dbConnectionString,
    dbName,
    port,
};
