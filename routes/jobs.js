const express = require('express');
const { MyJobs } = require('../controllers/jobs');
const router = express.Router();


router.get("/jobs",MyJobs )


module.exports = router;
