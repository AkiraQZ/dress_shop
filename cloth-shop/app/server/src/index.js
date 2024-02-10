require('dotenv').config()
const express = require('express');
const sequelize = require("./db.js");
const models = require('./models/models.js')

const app = express();
const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await sequelize.authenticate()
        .then(() => {
            console.log('DB authorized');
        })
        await sequelize.sync()
        .then (() => {
            console.log('DB sync');
        })
        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
    } catch (err) {
        console.error(err.message);
    }
}

// gentlemens, start your engines!!!
// try/catch just to make sure the server starts without errors

start();
