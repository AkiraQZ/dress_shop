require('dotenv').config();
const express = require('express');
const sequelize = require("./db.js");
const models = require('./models/models.js');
const cors = require('cors');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/error_hand_midleware.js');
const fileUpload = require ('express-fileupload');
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


app.use(errorHandler);

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

start();
