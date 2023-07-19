// Create web server with Node.js and Express framework
// This file contains the routes for the comments

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET request for creating a comment
router.get('/create', commentController.comment_create_get);

// POST request for creating a comment
router.post('/create', commentController.comment_create_post);

// GET request for deleting a comment
router.get('/:id/delete', commentController.comment_delete_get);

// POST request for deleting a comment
router.post('/:id/delete', commentController.comment_delete_post);

module.exports = router;