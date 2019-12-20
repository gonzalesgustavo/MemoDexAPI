const User = require('../models/Users');
const Response = require('../Utils/ResponseBuilder');
const Auth = require('../auth');
const DoupCheck = require('../Utils/DoublicateFinder');

const test = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json({ results: users });
    } catch (error) {
        res.status(404).json({ results: error })
    }
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.find({ username: username })
        if (user[0].password === password) {
            const token = '555543dfkoddfo4'
            res.status(200).json({ results: token });
        }
        else {
            res.status(400).json({ results: null });
        }
    } catch (error) {
        res.status(404).json({ results: error })
    }
}

const register = async (req, res, next) => {
    try {
        const { name, email, username, password } = req.body;
        const usernameTaken = await DoupCheck.username(username);
        const emailTaken = await DoupCheck.email(email);
        if (!usernameTaken || !emailTaken) {
            const user = new User({ name, email, username, password });
            const data = await user.save();
            const token = Auth.tokenize(data._id);
            res.setHeader('Authorization', token);
            const response = Response.success("Token Generated. Expires in 1hr", null, "hello", 1);
            res.status(200).json(response);
        } else {
            const response = Response.failed(null, 409, "Username or email exists, please login");
            res.status(409).json(response);
        }

    } catch (error) {
        console.log(error);
        res.status(404).json({ results: error });
    }
}

const unRegister = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(404).json({ results: error })
    }
}

module.exports = {
    login,
    register,
    unRegister,
    test
}