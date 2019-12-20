const User = require('../models/Users');

/**
 * Class DoupCheck searches for duplicate usernames and passwords, this is a second line of defense (Possibly rectified by unigue Validation on models) 
 */
class DoupCheck {
    /**
     * Checks Users for usernames that already exist.
     * @param {String} usn Username provided by client
     * @returns {Boolean}
     */
    static async username(usn) {
        const user = await User.find({ username: usn });
        if (user.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
    /**
   * Checks Users for emails that already exist.
   * @param {String} email Email provided by client
   * @returns {Boolean}
   */
    static async email(email) {
        const user = await User.find({ email: email });
        if (user.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = DoupCheck;