const router = require('express').Router();
const Activity = require('../controllers/Activity');

router.get('/', Activity.list);
router.post('/', Activity.create);

module.exports = router;