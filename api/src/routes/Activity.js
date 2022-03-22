const router = require('express').Router();
const Activity = require('../controllers/Activity');

router.get('/', Activity.list);
router.get('/:identity', Activity.activByPk);
router.post('/', Activity.create);
router.post('/:idActiv', Activity.createXcountry);

module.exports = router;