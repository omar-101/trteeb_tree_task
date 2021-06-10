const { MongoClient, ObjectId } = require('mongodb'),
    { dbConnectionString, dbName } = require('../config');

let connection;

module.exports = {
    connectToDatabase: async () => {
        try {
            const client = MongoClient(dbConnectionString, { useUnifiedTopology: true });
            await client.connect();
            connection = client.db(dbName);
        } catch (ex) {
            console.log('DATABASE ERROR!!! shutting down ...');
            console.log(ex);
            process.exit(1);
        } finally {
            // client.close();
        }
    },

    getDb: () => {
        return connection;
    },
    ObjectId: ObjectId,
};






