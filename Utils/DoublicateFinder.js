const User = require('../models/Users');
module.exports = class DoupCheck {
    static async username(usn) {
        const user = await User.find({ username: usn });
        if (user.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
    static async email(email) {
        const user = await User.find({ email: email });
        if (user.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
}