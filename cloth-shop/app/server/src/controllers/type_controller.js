const { type } = require('../models/models.js');
const apiError = require('../error/api_error.js');

class typeController {
    async create(req, res) {
        const {name} = req.body;
        const typeItem = await type.create({name});
        return res.json(typeItem);
    };

    async getAll(req, res, next) {
      try {
        const success = await type.findAll();
        res.json(success);
      } catch (err) {
        next(err);
      }
    };

    // async getOne (req, res, next) {
    //   try {
    //     const { id } = req.body;
    //     const success = await type.findOne({
    //       where: {
    //         "id" : id
    //       },
    //     });
    //     if (success) {
    //       res.json(success);
    //     } else {
    //       res.status(404).json({ error: "Item not found" });
    //     }
    //   } catch (err) {
    //     next(err);
    //   }
    // }

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