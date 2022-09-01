var express = require('express');
var router = express.Router();
const {create,readOne,read,put,removeCity} = require('../controllers/Cities')



router.post('/',create)

router.get('/',read)

//localhost4000/city/


router.get('/:id',readOne)

router.get('/:id',put)

router.get('/:id',removeCity)


module.exports = router
