const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const supporter_controller = require('../controllers/supporter.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', supporter_controller.test);

// Create Supporter
router.post('/create', supporter_controller.supporter_create);

module.exports = router;
