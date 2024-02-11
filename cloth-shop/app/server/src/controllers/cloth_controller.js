const { cloth } = require("../models/models.js");
const uuid = require ('uuid');
const path = require('path');
const apiError = require("../error/api_error");
const fs = require("fs/promises")

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
    const {typeId, name} = req.query;
    let clothItem;
    if (!typeId && !name) {
      clothItem = await cloth.findAll();
    } else if (typeId && !name) {
      clothItem = await cloth.findAll({
        where:{
          "typeId" : typeId
        }
      });
    } else if (!typeId && name) {
      clothItem = await cloth.findOne({
        where:{
          "name" : name
        }
      });
    } else if (typeId && name) {
      clothItem = await cloth.findOne({
        where:{
          "name": name,
          "typeId": typeId,
        }
      });
    }
    return res.json(clothItem);
  };
// get id for select
  async update(req, res, next) {
    try {
      const { id, name, price, typeId} = req.body;
      const { img } = req.files;
      let updateFields = {};
      if (name) updateFields.name = name;
      if (price) updateFields.price = price;
      if (typeId) updateFields.typeId = typeId;
      if (img) {
        const imgToUpdate = await cloth.findByPk(id);
        if (imgToUpdate.img) {
          fs.unlink(path.resolve(__dirname, '..', 'static', imgToUpdate.img), (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        updateFields.img = fileName;
      }
      const updatedCloth = await cloth.update(updateFields, {
        where: { id: id },
        returning: true,
      });
      if (updatedCloth[0] === 0) {
        res.status(404).json({ message: "something wrong" });
      } else {
        res.json(updatedCloth[1][0]);
      }
    } catch (err) {
      next(apiError.badRequest(err.message));
    }
  }
    async delete(req, res, next) {
      try {
          const {id} = req.body;
          const imgToUpdate = await cloth.findByPk(id);
          if (imgToUpdate.img) {
            fs.unlink(path.resolve(__dirname, '..', 'static', imgToUpdate.img), (err) => {
              if (err) {
                console.error(err);
              }
            });
          }
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