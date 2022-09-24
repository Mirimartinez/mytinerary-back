let express = require('express')
let router = express.Router()
const {create, all, getActivity, update, destroy} = require('../controllers/activityController')

// GET users listing
router.post('/', create)
router.get('/', all)
router.get('/:id', getActivity)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router