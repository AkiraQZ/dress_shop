const Router = require ('express');
const router = new Router();
const userController = require ('../controllers/user_controller.js');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.delete('/', userController.delete)

module.exports = router;