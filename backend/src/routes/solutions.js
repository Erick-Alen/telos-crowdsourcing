const express = require('express');
const authController = require('../controllers/AuthController');

const router = express.Router()

router.post('/', authController.Register)
router.get('/', authController.login)
router.get('/:id', authController.login)
router.put('/', authController.login)
router.delete('/:id', authController.login)

module.exports = router
