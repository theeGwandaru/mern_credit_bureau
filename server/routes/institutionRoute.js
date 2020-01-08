const express = require('express');
const router = express.Router();

const institutionController = require('../controllers/InstitutionController');

router.post('/', institutionController.createInstitution);

module.exports = router;