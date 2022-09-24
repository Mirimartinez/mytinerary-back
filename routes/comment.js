let express = require('express')
let router = express.Router()
const {createComment, getAllComments, getComment, editComment, deleteComment} = require('../controllers/commentController')
const passport = require('../config/passport')

// GET users listing
router.post('/', passport.authenticate('jwt',{ session: false}), createComment)
router.get('/', getAllComments)
router.get('/:id', passport.authenticate('jwt', {session:false}), getComment);
router.patch('/:id',passport.authenticate('jwt', {session:false}), editComment)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteComment)

module.exports = router