const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT, baseUrlStr } = require('./config');
const DBConnector = require('./db')

async function main() {

    // Config
    const app = express();

    //init database connection
    await DBConnector.connect();

    //routes
    const websiteHandler = require('./API/websites');
    const contactHandler = require('./API/contacts');
    const notesHandler = require('./API/notes');
    const usersHandler = require('./API/users');

    //cors
    app.use(cors());

    //middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //route controllers
    app.use(`${baseUrlStr}/users`, usersHandler);
    app.use(`${baseUrlStr}/websites`, websiteHandler);
    app.use(`${baseUrlStr}/contacts`, contactHandler);
    app.use(`${baseUrlStr}/notes`, notesHandler);

    //server
    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
    });


}

main()