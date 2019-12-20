const Contact = require('../models/Contacts');
const Response = require('../Utils/ResponseBuilder');

const getContacts = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const contacts = await Contact.find({ userId: _id }).limit(10);
        const response = Response.success("limit of 10 contacts", contacts);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);

    }
}

const getContact = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const contact = await Contact.findById({ _id: id, userId: _id });
        const response = Response.success(`Contact with id ${id} found`, [contact]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 404);
        res.status(404).json(response);
    }
}

const addContact = async (req, res, next) => {
    try {
        const { _id } = req.user;
        if (_id) {
            const contactAdded = new Websites({ userId: _id, ...req.body });
            const contact = await contactAdded.save();
            const response = Response.success("Contact added", contact);
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

const updateContact = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const body = req.body;
        if (_id) {
            const upd8tedContact = await Contact.findByIdAndUpdate({ _id: id, userId: _id }, { $set: body });
            const updated = await Contact.findById({ _id: id, userId: _id })
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

const removeContact = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        if (_id) {
            const data = await Contact.findByIdAndDelete({ _id: id, userId: _id });
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
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
}