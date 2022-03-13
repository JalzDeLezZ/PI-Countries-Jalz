const router = require('express').Router();
const Countries = require('../controllers/Countries');

router.get('/', Countries.list);
router.get('/:idPais', Countries.listById);

module.exports = router;
