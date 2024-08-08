const express = require('express');
const { getEditById, putPostId } = require('../controllers/edit_post');
const router = express.Router();

router.get("/edit-postbyid/:id",getEditById );
router.put("/edit-postbyid/:id",putPostId);


module.exports = router;


