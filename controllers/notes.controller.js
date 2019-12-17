const Note = require('../models/Notes');
const ToArray = require('../Utils/ArrayBuilder');

const getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find({}).limit(10);
        res.status(200).json({ results: notes });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const getNote = (req, res, next) => {
    try {
        const note = await Note.findById({ _id: req.params.id });
        res.status(200).json({ results: note });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const addNote = (req, res, next) => {
    try {
        const { text, tags } = req.body;
        const tagArray = ToArray(tags);
        const noteAdded = new Websites({ text, tagArray });
        const note = await noteAdded.save();
        res.status(200).json({ results: note });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const updateNote = (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const upd8tedNote = await Note.findByIdAndUpdate({ _id: id }, { $set: body });
        res.status(200).json({ results: upd8tedNote });
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

const removeNote = (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Note.findByIdAndDelete({ _id: id });
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ results: error })
    }
}

module.exports = {
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
}