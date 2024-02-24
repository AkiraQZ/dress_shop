const Router = require ('express');
const router = new Router();
const userController = require ('../controllers/user_controller.js');
const auth_midleware = require ('../middleware/auth_midleware.js');
const checkRole = require('../middleware/check_role_midlleware.js');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', auth_midleware, userController.check)
//maybe i should add check role here, or user check
//TODO: add user check for not avalible deleting from another user
router.delete('/', userController.delete)

module.exports = router;