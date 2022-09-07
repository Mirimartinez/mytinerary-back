var express = require('express');
var router = express.Router();
const {create} = require('../controllers/cityController')



router.post('/',create)


module.exports = router
