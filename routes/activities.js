let express = require('express')
let router = express.Router()
const {create, all} = require('../controllers/activityController')

// GET users listing
router.post('/', create)
router.get('/', all)

module.exports = router