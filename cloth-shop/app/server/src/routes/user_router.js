const Router = require ('express');
const router = new Router();
const userController = require ('../controllers/user_controller.js');
const auth_midleware = require ('../middleware/auth_midleware.js');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', auth_midleware, userController.check)
router.delete('/', userController.delete)

module.exports = router;