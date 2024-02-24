const apiError = require('../error/api_error.js');

module.exports = function (err, req, res, next) {
    if (err instanceof apiError) {
        return res.status(err.status).json({message: err});
    };
    return res.status(500).json({message: 'Unexpected error'})
};