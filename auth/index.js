const { verify, sign } = require("jsonwebtoken");
const config = require('../config');

module.exports = class Auth {
    static tokenize(id) {
        const token = sign({ _id: id }, config.jwtSecret, {
            expiresIn: "1h"
        });
        return token;
    }
    static audit(req, res, next) {
        const token = req.header("authorization");
        if (!token) return res.status(401).send("Accesss Denied!");
        try {
            const verified = verify(token, config.jwtSecret);
            req.user = verified;
            next();
        } catch (error) {
            return res.status(400).send("Invalid Token");
        }
    }
}