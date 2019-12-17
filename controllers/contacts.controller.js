const Contact = require('../models/Contacts');

const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({}).limit(10);
        res.status(200).json({ results: contacts });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const getContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById({ _id: req.params.id });
        res.status(200).json({ results: contact });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const addContact = async (req, res, next) => {
    try {
        const contactAdded = new Websites({ ...req.body });
        const contact = await contactAdded.save();
        res.status(200).json({ results: contact });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
    res.status(200).end();
}

const updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedContact = await Contact.findByIdAndUpdate({ _id: id }, { $set: body });
        res.status(200).json({ results: upd8tedContact });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const removeContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Contact.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ results: error })
    }
}

module.exports = {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
}