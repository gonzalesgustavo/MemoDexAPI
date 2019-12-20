const Websites = require('../models/Websites');
const Response = require('../Utils/ResponseBuilder');

const getWebsites = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const websites = await Websites.find({ userId: _id }).limit(10);
        const response = Response.success("limit of 10 websites", websites);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const getWebsite = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const website = await Websites.findById({ _id: id, userId: _id });
        const response = Response.success(`Success, website with id ${id} found`, [website]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const addWebsite = async (req, res, next) => {
    try {
        const { _id } = req.user;
        if (_id) {
            const websiteAdded = new Websites({ userId: _id, ...req.body });
            const website = await websiteAdded.save();
            const response = Response.success("Website added", [website]);
            res.status(200).json(response);
        } else {
            const response = Response.failed(null, 406, "Failed");
            res.status(406).json(response);
        }

    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const updateWebsite = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const body = req.body;
        if (_id) {
            const upd8tedWebsite = await Websites.findByIdAndUpdate({ _id: id, userId: _id }, { $set: body });
            const updated = await Websites.findById({ _id: id, userId: _id })
            const response = Response.success(`Website with id ${id} updated`, [updated]);
            res.status(200).json(response);
        } else {
            const response = Response.failed(null, 406, "Failed");
            res.status(406).json(response);
        }
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const removeWebsite = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        if (_id) {
            const data = await Websites.findByIdAndDelete({ _id: id, userId: _id });
            res.status(204).end();
        } else {
            const response = Response.failed(null, 406, "Failed");
            res.status(406).json(response);
        }
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