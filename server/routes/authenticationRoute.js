var express = require('express');
const router = express.Router();
const authenticationService = require('../services/AuthenticationService');
const userController = require('../controllers/UserController');

router.post('/', authenticationService.optional, userController.authenticate);


module.exports = router;