const express = require('express');

const { ErrorUsers } = require('../controllers/error');

const router = express.Router();

router.use(ErrorUsers);

module.exports = router;