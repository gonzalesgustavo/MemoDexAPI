const User = require('../models/Users');
const login = (req, res, next) => {
    res.status(200).end();
}

const register = async (req, res, next) => {
    const { name, email, username, password } = req.body;
    const user = new User(name, email, username, password);
    console.log(req.db);
    // const data = await user.save(req.db);
    res.status(200).json({ results: data });
}

const unRegister = (req, res, next) => {
    res.status(200).end();
}

module.exports = {
    login,
    register,
    unRegister
}