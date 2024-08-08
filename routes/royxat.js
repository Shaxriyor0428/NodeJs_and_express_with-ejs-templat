const express = require('express');
const { royxatShow, royxatDelete } = require('../controllers/royxat');
const router = express.Router();


router.get("/royxat/:id", royxatShow);
router.delete("/royxat/:id",royxatDelete);

module.exports = router;