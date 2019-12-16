const User = require('../models/Users');

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
        const user = new User({ name, email, username, password });
        const data = await user.save();
        res.status(200).json({ results: data });
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