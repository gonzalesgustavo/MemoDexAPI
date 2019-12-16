const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Config
const { PORT, baseUrlStr } = require('./config');

//routes
const websiteHandler = require('./API/websites');
const contactHandler = require('./API/contacts');
const notesHandler = require('./API/notes');

//cors
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route controllers
app.use(`${baseUrlStr}/websites`, websiteHandler);
app.use(`${baseUrlStr}/contacts`, contactHandler);
app.use(`${baseUrlStr}/notes`, notesHandler);

//server
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});