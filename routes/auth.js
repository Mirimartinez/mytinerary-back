const express = require('express');
const router = express.Router();

const {create, all, signUp, verifyMail, signIn, signOut} = require('../controllers/authController')

router.post('/', create)
router.get('/', all)
router.post('/signup', signUp)
router.get('/verify/:code', verifyMail)
router.post('/signin', signIn)
router.post('/signout', signOut)

module.exports = router;