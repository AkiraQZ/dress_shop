const { cloth } = require("../models/models.js");
const uuid = require ('uuid');
const path = require('path');
const apiError = require("../error/api_error");

class clothController {
  async create(req, res, next) {
    try {
      const {name, price, typeId} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const clothItem = await cloth.create({name, price, typeId, img: fileName});

      return res.json(clothItem);
    } catch (err) {
      next(apiError.badRequest(err.message));
    }
  };

    async getAll(req, res) {

    };

    async getOne (req, res) {

    }

    async update (req, res) {

    }

    async delete(req, res, next) {
      try {
          const {id} = req.body;
          const success = await cloth.destroy({
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

module.exports = new clothController();