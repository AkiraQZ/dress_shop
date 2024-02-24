const apiError = require('../error/api_error.js');
const {user, basket} = require('../models/models.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function genJwt(id, email, role) {
  return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
}
class userController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
        return next(apiError.badRequest('Некорректный email или password'))
    }
    const candidate = await user.findOne({where: {email}})
    if (candidate) {
        return next(apiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const userItem = await user.create({email, role, password: hashPassword})
    const basketItem = await basket.create({userId: user.id})
    const token = genJwt(userItem.id, userItem.email, userItem.role)
    return res.json({token})
}

    async login(req, res, next) {
      const {email, password} = req.body
      const userItem = await user.findOne({where: {email}})
      if (!userItem) {
          return next(apiError.internal('User not found'))
      }
      let comparePassword = bcrypt.compareSync(password, userItem.password)
      if (!comparePassword) {
          return next(apiError.internal('Incorrect password'))
      }
      const token = genJwt(userItem.id, userItem.email, userItem.role)
      return res.json({token})
    }

    async check(req, res, next) {
      const token = genJwt(req.user.id, req.user.email, req.user.role)
      return res.json({token})
  }

    async  delete(req, res, next) {
        try {
          const { id } = req.body;

          const success = await user.destroy({
            where: {
              "id": id
            },
          });

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