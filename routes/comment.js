let express = require('express')
let router = express.Router()
const {create, all, updateComment, deleteComment} = require('../controllers/commentController')
const passport = require('../config/passport')

// GET users listing
router.post('/', passport.authenticate('jwt',{ session: false}), create)
router.get('/', all)
router.patch('/:id',passport.authenticate('jwt', {session:false}), updateComment)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteComment)

module.exports = router