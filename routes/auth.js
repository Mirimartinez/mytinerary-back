const express = require('express');
const router = express.Router();

const {create, all, signUp, verifyMail} = require('../controllers/authController')

router.post('/', create)
router.get('/', all)
router.post('/signup', signUp)
router.get('/verify/:code', verifyMail)
module.exports = router;