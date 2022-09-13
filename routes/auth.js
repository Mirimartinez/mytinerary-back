const express = require('express');
const router = express.Router();

const {create, all} = require('../controllers/authController')

router.post('/', create)
router.get('/', all)

module.exports = router;