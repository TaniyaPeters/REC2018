const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const offer_controller = require('../controllers/supporter.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', offer_controller.test);

module.exports = router;
