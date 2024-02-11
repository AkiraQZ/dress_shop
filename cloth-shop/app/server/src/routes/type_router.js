const Router = require ('express');
const router = new Router();
const typeController = require('../controllers/type_controller.js')

router.post('/', typeController.create)
router.get('/', typeController.getAll)
router.delete('/', typeController.delete);

module.exports = router;