const mongoose = require('mongoose');
const { mongoConStr } = require('../config');


module.exports = class DBConnector {
    static async connect() {
        try {
            // See https://mongoosejs.com/docs/deprecations.html (findAndModify())
            mongoose.set('useFindAndModify', false)
            //connect to database
            await mongoose.connect(mongoConStr, {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            });
        } catch (error) {
            console.log(error);
        }
    }
}