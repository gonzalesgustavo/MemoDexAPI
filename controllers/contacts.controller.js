const Contact = require('../models/Contacts');
const Response = require('../Utils/ResponseBuilder');

const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({}).limit(10);
        const response = Response.success("limit of 10 contacts returned", contacts);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);

    }
}

const getContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById({ _id: req.params.id });
        const response = Response.success("Contact found", contact);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 404);
        res.status(404).json(response);
    }
}

const addContact = async (req, res, next) => {
    try {
        const contactAdded = new Websites({ ...req.body });
        const contact = await contactAdded.save();
        const response = Response.success("Contact added", contact);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedContact = await Contact.findByIdAndUpdate({ _id: id }, { $set: body });
        const response = Response.success(`Contact with ${id} was successfully updated`, upd8tedContact);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const removeContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Contact.findByIdAndDelete({ _id: id });
        const response = Response.noContent(`Contact with ${id}`);
        res.status(204).json(response);
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