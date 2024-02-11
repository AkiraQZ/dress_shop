const { type } = require('../models/models.js');
const apiError = require('../error/api_error.js');

class typeController {
    async create(req, res) {
        const {name} = req.body;
        const typeItem = await type.create({name});
        return res.json(typeItem);
    };

    async getAll(req, res) {
      const typesItems = await type.findAll();
      return res.json(typesItems)
    };

    async delete(req, res, next) {
      try {
          const {id} = req.body;
          const success = await type.destroy({
            where: {
              "id": id
            },
          }
          );
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

module.exports = new typeController();