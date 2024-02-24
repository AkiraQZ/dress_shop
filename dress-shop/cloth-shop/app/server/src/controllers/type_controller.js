const { type } = require('../models/models.js');
const apiError = require('../error/api_error.js');

class typeController {
    async create(req, res) {
        const {name} = req.body;
        const typeItem = await type.create({name});
        return res.json(typeItem);
    };

    async getAll(req, res) {
      const {id, name} = req.query;
      let typeItem;
      if (!id && !name) {
        typeItem = await type.findAll();
      } else if (id && !name) {
        typeItem = await type.findAll({
          where:{
            "id" : id
          }
        });
      } else if (!id && name) {
        typeItem = await type.findOne({
          where:{
            "name" : name
          }
        });
      } else if (id && name) {
        typeItem = await type.findOne({
          where:{
            "name": name,
            "id": id,
          }
        });
      }
      return res.json(typeItem);
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