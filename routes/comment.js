let express = require('express')
let router = express.Router()
const {create, all} = require('../controllers/commentController')

// GET users listing
router.post('/', create)
router.get('/', all)

module.exports = router