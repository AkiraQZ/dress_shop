const Router = require ('express');
const router = new Router();
const cloth_controller = require('../controllers/cloth_controller.js');

router.post('/', cloth_controller.create);
router.get('/', );
// router.get('/:id', typeController.getOne);
router.delete('/',);



module.exports = router;