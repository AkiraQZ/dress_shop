// TODO: controller for basket
// we need functional: get what basket includes, one basket - one user, delete info in basket, clear all baket




// const { basket, basketCloth } = require("../models/models.js");
// const uuid = require ('uuid');
// const path = require('path');
// const apiError = require("../error/api_error");
// const fs = require("fs/promises")

// class basketController {
//   async create(req, res, next) {
//     try {
//       const {name, price, typeId, info} = req.body;
//       const {img} = req.files;
//       let fileName = uuid.v4() + ".jpg";
//       img.mv(path.resolve(__dirname, '..', 'static', fileName))

//       const clothItem = await cloth.create({name, price, typeId, img: fileName});

//       if(info) {
//         info = JSON.parse(info)
//         info.forEach(element => {
//           cloth_info.create({
//             title: element.title,
//             description: element.description,
//             clothId: cloth.id,
//           })
//         });
//       }

//       return res.json(clothItem);
//     } catch (err) {
//       next(apiError.badRequest(err.message));
//     }
//   };

//   async getAll(req, res) {
//     let {typeId, name, limit, page} = req.query;
//     page = page || 1;
//     limit = limit || 9;
//     let offset = page * limit - limit;
//     let clothItem;
//     if (!typeId && !name) {
//       clothItem = await cloth.findAndCountAll({limit, offset});
//     } else if (typeId && !name) {
//       clothItem = await cloth.findAndCountAll({
//         where:{
//           "typeId" : typeId,
//           limit,
//           offset
//         },
//       });
//     } else if (!typeId && name) {
//       clothItem = await cloth.findOne({
//         where:{
//           "name" : name,
//           limit,
//           offset
//         },
//       });
//     } else if (typeId && name) {
//       clothItem = await cloth.findOne({
//         where:{
//           "name": name,
//           "typeId": typeId,
//           limit,
//           offset
//         },
//       });
//     }
//     return res.json(clothItem);
//   };

//   async getOne(req, res) {
//     const {id} = req.params
//     const clothItem = await cloth.findOne(
//         {
//             where: {id},
//             include: [{model: cloth_info, as: 'info'}]
//         },
//     )
//     return res.json(clothItem)
// }
// // get id for select
//   async update(req, res, next) {
//     try {
//       const { id, name, price, typeId} = req.body;
//       const { img } = req.files;
//       let updateFields = {};
//       if (name) updateFields.name = name;
//       if (price) updateFields.price = price;
//       if (typeId) updateFields.typeId = typeId;
//       if (img) {
//         const imgToUpdate = await cloth.findByPk(id);
//         if (imgToUpdate.img) {
//           fs.unlink(path.resolve(__dirname, '..', 'static', imgToUpdate.img), (err) => {
//             if (err) {
//               console.error(err);
//             }
//           });
//         }
//         let fileName = uuid.v4() + ".jpg";
//         img.mv(path.resolve(__dirname, '..', 'static', fileName));
//         updateFields.img = fileName;
//       }
//       const updatedCloth = await cloth.update(updateFields, {
//         where: { id: id },
//         returning: true,
//       });
//       if (updatedCloth[0] === 0) {
//         res.status(404).json({ message: "something wrong" });
//       } else {
//         res.json(updatedCloth[1][0]);
//       }
//     } catch (err) {
//       next(apiError.badRequest(err.message));
//     }
//   }
//     async delete(req, res, next) {
//       try {
//           const {id} = req.body;
//           const imgToUpdate = await cloth.findByPk(id);
//           if (imgToUpdate.img) {
//             fs.unlink(path.resolve(__dirname, '..', 'static', imgToUpdate.img), (err) => {
//               if (err) {
//                 console.error(err);
//               }
//             });
//           }
//           const success = await cloth.destroy({
//             where: {
//               "id": id
//             },
//           }
//           );
//           if (success) {
//               res.status(204).end();
//           } else {
//               res.status(404).end();
//           }
//       } catch (err) {
//           next(err);
//       }
//     }
// };

// module.exports = new basketController();