const express = require('express');
const router = express.Router();

router.use('/subject', require('./subject'));
router.use('/class', require('./class'));
router.use('/exam', require('./exam'));
router.use('/quiz', require('./quiz'));
router.use('/group', require('./group'));


module.exports = router;
