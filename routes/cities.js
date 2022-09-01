var express = require('express');
var router = express.Router();
const {createCity,readCity,readCities,put,removeCity} = require('../controllers/Cities')



router.post('/',createCity)

router.get('/',readCities)

//localhost4000/city/


router.get('/:id',readCity)

router.get('/:id',put)

router.get('/:id',removeCity)


module.exports = router
