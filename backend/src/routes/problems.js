const express = require('express');
const AuthController = require('../controllers/AuthController');
const ProblemController = require('../controllers/ProblemController');

const router = express.Router()

router.get('/:id', ProblemController.getOne)
router.post('/', ProblemController.create)

module.exports = router;
