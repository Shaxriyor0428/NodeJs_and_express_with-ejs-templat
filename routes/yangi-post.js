const express = require('express');
const { getNewPost, addNewPost } = require('../controllers/yangi-post');
const router = express.Router();



router.get("/yangi-post", getNewPost);


router.post("/yangi-post",addNewPost );


module.exports = router;
