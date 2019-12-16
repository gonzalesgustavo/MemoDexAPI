const mongoClient = require('mongodb').MongoClient;
const { mongoConStr } = require('../config');

module.exports = class DBConnector {
    static async connect() {
        try {
            this._db = await mongoClient.connect(mongoConStr, { useUnifiedTopology: true });
        } catch (error) {
            console.log(error);
        }
    }
    static async DB() {
        return this._db;
    }
}