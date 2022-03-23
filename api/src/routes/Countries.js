const router = require('express').Router();
const Countries = require('../controllers/Countries');

router.get('/', Countries.list);
router.get('/activities', Countries.allCountriesXActivities);
router.get('/:idPais', Countries.listById);

module.exports = router;
