const express = require('express');
const router = express.Router();

// on require le controller
const controller = require('./controller');
// dÉfinir nos routes
router.get('/', controller.homePage);

router.get('/contact', controller.contactPage);

// exporter le module
module.exports = router;