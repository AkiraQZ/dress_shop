const apiError = require('../error/api_error.js')

class userController {
    async registration(req, res) {

    };

    async login(req, res) {

    };

    async check(req, res, next) {
        const {id} = req.query;
        if(!id){
            return next(apiError.badRequest('ID not found'));
        };
        res.json(id);
    };

    async  delete(req, res, next) {
        try {
          const id = parseInt(req.params.id, 10);

          const success = await user.delete(id);

          if (success) {
            res.status(204).end();
          } else {
            res.status(404).end();
          }
        } catch (err) {
          next(err);
        }
      }
};

module.exports = new userController();