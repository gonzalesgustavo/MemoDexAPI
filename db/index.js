const mongoose = require('mongoose');
const { mongoConStr } = require('../config');

module.exports = class DBConnector {
    static async connect() {
        try {
            await mongoose.connect(mongoConStr, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (error) {
            console.log(error);
        }
    }
}