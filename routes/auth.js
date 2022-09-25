const express = require('express');
const router = express.Router();
let passport = require('../config/passport')
const adminPassport = require('../config/adminPassport')
const {create, all, signUp, verifyMail, signIn, signOut, verifyToken, deleteUser, updateUser} = require('../controllers/authController')

router.post('/', create)
router.get('/', all)
router.post('/signup', signUp)
router.get('/verify/:code', verifyMail)
router.post('/signin', signIn)
router.post('/signout', signOut)
router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)
router.delete('/:id',adminPassport.authenticate('jwt', {session:false}), deleteUser )
router.patch('/', passport.authenticate('jwt', {session:false}),updateUser );

module.exports = router;