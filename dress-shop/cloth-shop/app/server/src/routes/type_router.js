const Router = require ('express');
const router = new Router();
const typeController = require('../controllers/type_controller.js');
const checkRole = require('../middleware/check_role_midlleware.js');

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
// router.get('/:id', typeController.getOne);
router.delete('/', checkRole('ADMIN'), typeController.delete);



module.exports = router;