require('dotenv').config()
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// gentlemens, start your engines!!!
// try/catch just to make sure the server starts without errors
try {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
} catch (error) {
    console.error(error.message);
}
