const Note = require('../models/Notes');
const Response = require('../Utils/ResponseBuilder');

const getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find({}).limit(10);
        const response = Response.success("limit of 10 notes", notes);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const getNote = async (req, res, next) => {
    try {
        const id = req.params.id;
        const note = await Note.findById({ _id: id });
        const response = Response.success(`Success, note with id ${id} found`, [note]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const addNote = async (req, res, next) => {
    try {
        const { text } = req.body;
        const noteAdded = new Note({ text });
        const note = await noteAdded.save();
        const response = Response.success("Note added", [note]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const updateNote = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedNote = await Note.findByIdAndUpdate({ _id: id }, { $set: body });
        const response = Response.success(`Note with id ${id} updated`, [upd8tedNote]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

const removeNote = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Note.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        const response = Response.failed(error, 406);
        res.status(406).json(response);
    }
}

module.exports = {
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
}