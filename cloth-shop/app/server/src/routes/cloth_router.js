const Router = require ('express');
const router = new Router();
const cloth_controller = require('../controllers/cloth_controller.js');

router.post('/', cloth_controller.create);
router.get('/', cloth_controller.getAll);
router.get('/:id', cloth_controller.getOne);
router.put('/', cloth_controller.update);
router.delete('/', cloth_controller.delete);



module.exports = router;