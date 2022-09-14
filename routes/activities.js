let express = require('express')
let router = express.Router()
const {create, all, getActivity} = require('../controllers/activityController')

// GET users listing
router.post('/', create)
router.get('/', all)
router.get('/', getActivity)

module.exports = router