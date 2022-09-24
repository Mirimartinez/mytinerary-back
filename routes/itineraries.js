const express = require('express');
const router = express.Router();
let passport = require('../config/passport')

const {create, update, destroy, all, getItinerary, LikeDislike, ByUser} = require('../controllers/itineraryController')

router.post('/', passport.authenticate('jwt', {session: false}), create)
router.get('/', all)
router.patch('/:id', passport.authenticate('jwt', {session: false}), update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), destroy)
router.get('/:id', passport.authenticate('jwt', {session: false}),getItinerary)
router.patch('/likes/:itineraryId', passport.authenticate('jwt', {session:false}), LikeDislike)
router.get('/auth/:id', passport.authenticate('jwt',{ session: false}), ByUser)


module.exports = router;