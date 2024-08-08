const express = require("express");
const { homeRout } = require("../controllers/home");
const router = express.Router();

router.get("/", homeRout)



module.exports = router;



