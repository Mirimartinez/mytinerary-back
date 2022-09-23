let express = require('express')
let router = express.Router()
const {create, getComment, getAllComments, editComment, deleteComment} = require('../controllers/commentController')

// GET users listing
router.post('/', create);
router.get('/', getAllComments);
router.get('/:id', getComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router