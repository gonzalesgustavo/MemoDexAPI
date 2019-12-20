const Note = require('../models/Notes');
const Response = require('../Utils/ResponseBuilder');

const getNotes = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const notes = await Note.find({ userId: _id }).limit(10);
        const response = Response.success("limit of 10 notes", notes);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const getNote = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const note = await Note.findById({ _id: id, userId: _id });
        const response = Response.success(`Success, note with id ${id} found`, [note]);
        res.status(200).json(response);
    } catch (error) {
        const response = Response.failed(error, 500);
        res.status(500).json(response);
    }
}

const addNote = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const { text } = req.body;
        if (_id) {
            const noteAdded = new Note({ text, userId: _id });
            const note = await noteAdded.save();
            const response = Response.success("Note added", [note]);
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

const updateNote = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        const body = req.body;
        if (_id) {
            const upd8tedNote = await Note.findByIdAndUpdate({ _id: id, userId: _id }, { $set: body });
            const updated = await Note.findById({ _id: id })
            const response = Response.success(`Note with id ${id} updated`, [updated]);
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

const removeNote = async (req, res, next) => {
    try {
        const { _id } = req.user;
        const id = req.params.id;
        if (_id) {
            const data = await Note.findByIdAndDelete({ _id: id, userId: _id });
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
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
}