const express = require('express');
const { allPosts } = require('../controllers/allpost');
const routes = express.Router();


routes.get("/allPosts", allPosts);


module.exports = routes;


