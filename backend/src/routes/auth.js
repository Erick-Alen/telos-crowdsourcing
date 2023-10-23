const express = require('express');
const authController = require('../controllers/AuthController');
const router = express.Router()

router.post('/register', authController.Register)
router.post('/login', (req, res, next) => {

})

module.exports = router;
