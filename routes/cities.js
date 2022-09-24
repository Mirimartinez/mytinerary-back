var express = require ('express');
var router = express.Router();
const {createCity,readCity,readCities,updateCity,removeCity} = require('../controllers/Cities')
const passport = require('../config/passport')



router.post('/',passport.authenticate('jwt', {session:false}), createCity)

router.get('/',readCities)

//localhost4000/city/


router.get('/:id',readCity)

router.patch('/:id',passport.authenticate('jwt', {session:false}), updateCity)

router.delete('/:id',passport.authenticate('jwt', {session:false}), removeCity)


module.exports = router
