let express = require('express')
let router = express.Router()
const {create, all, getActivity, editActivity, deleteActivity} = require('../controllers/activityController')

// GET users listing
router.post('/', create)
router.get('/', all)
router.get('/:id', getActivity)
router.patch('/:id', editActivity);
router.delete('/:id', deleteActivity);


module.exports = router