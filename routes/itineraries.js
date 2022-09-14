const express = require('express');
const router = express.Router();

const {create, update, destroy, all, getItinerary} = require('../controllers/itineraryController')

router.post('/', create)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)
router.get('/:id', getItinerary)


module.exports = router;