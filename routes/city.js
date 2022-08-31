var express = require('express');
var router = express.Router();
const {create,read} = require('../controllers/Cities')



router.post('/',create)

//localhost4000/city/

router.get('/:id',read)


module.exports = router
