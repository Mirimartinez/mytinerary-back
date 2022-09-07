var express = require ('express');
var router = express.Router();
const {createCity,readCity,readCities,updateCity,removeCity} = require('../controllers/Cities')



router.post('/',createCity)

router.get('/',readCities)

//localhost4000/city/


router.get('/:id',readCity)

router.patch('/:id',updateCity)

router.delete('/:id',removeCity)


module.exports = router
