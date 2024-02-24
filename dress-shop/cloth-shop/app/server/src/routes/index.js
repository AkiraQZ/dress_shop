const Router = require ('express');
const router = new Router();
const clothRouter = require('./cloth_router.js');
const typeRouter = require('./type_router.js');
const userRouter = require('./user_router.js');

router.use('/user', userRouter);
router.use('/cloth', clothRouter);
router.use('/type', typeRouter);

module.exports = router;