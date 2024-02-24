const Router = require ('express');
const checkRole = require('../middleware/check_role_midlleware.js');
const router = new Router();
const cloth_controller = require('../controllers/cloth_controller.js');

router.post('/', checkRole('ADMIN'), cloth_controller.create);
router.get('/', cloth_controller.getAll);
router.get('/:id', cloth_controller.getOne);
router.put('/', checkRole('ADMIN'), cloth_controller.update);
router.delete('/', checkRole('ADMIN'), cloth_controller.delete);



module.exports = router;