const Websites = require('../models/Websites');
const Response = require('../Utils/ResponseBuilder');

const getWebsites = async (req, res, next) => {
    try {
        const websites = await Websites.find({}).limit(10);
        const response = Response.success("limit of 10 websites returned", websites);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const getWebsite = async (req, res, next) => {
    try {
        const id = req.params.id;
        const website = await Websites.findById({ _id: id });
        const response = Response.success(`Success, website with id ${id} found`, [website]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const addWebsite = async (req, res, next) => {
    try {
        const websiteAdded = new Websites({ ...req.body });
        const website = await websiteAdded.save();
        const response = Response.success("Website added", [website]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const updateWebsite = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedWebsite = await Websites.findByIdAndUpdate({ _id: id }, { $set: body });
        const response = Response.success(`Website with id ${id} updated`, [upd8tedWebsite]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const removeWebsite = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Websites.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

module.exports = {
    getWebsite,
    getWebsites,
    addWebsite,
    updateWebsite,
    removeWebsite
}