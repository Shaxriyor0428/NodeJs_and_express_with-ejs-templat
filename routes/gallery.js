const express = require("express");
const { Gallery } = require("../controllers/gallery");
const router = express.Router();



router.get("/gallery",Gallery);

module.exports = router;
