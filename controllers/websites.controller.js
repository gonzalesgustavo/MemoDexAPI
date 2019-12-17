const Websites = require('../models/Websites');

const getWebsites = async (req, res, next) => {
    try {
        const websites = await Websites.find({}).limit(10);
        res.status(200).json({ results: websites });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const getWebsite = async (req, res, next) => {
    try {
        const website = await Websites.findById({ _id: req.params.id });
        res.status(200).json({ results: website });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const addWebsite = async (req, res, next) => {
    try {
        const { url, type, emailUsed, username, pwdHint } = req.body;
        const websiteAdded = new Websites({ url, type, emailUsed, username, pwdHint });
        const website = await websiteAdded.save();
        res.status(200).json({ results: website });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const updateWebsite = (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedWebsite = await Websites.findByIdAndUpdate({ _id: id }, { $set: body });
        res.status(200).json({ results: upd8tedWebsite });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const removeWebsite = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Websites.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ results: error })
    }
}

module.exports = {
    getWebsite,
    getWebsites,
    addWebsite,
    updateWebsite,
    removeWebsite
}