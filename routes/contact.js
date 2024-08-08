const express = require("express");
const { Contacts } = require("../controllers/contact");
const router = express.Router();

router.get("/contact",Contacts);


module.exports = router;