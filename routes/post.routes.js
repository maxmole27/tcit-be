
const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')


router.get('/', postController.getRawPosts)
router.get('/paginated', postController.getPosts)
router.post('/', postController.createPost)
router.delete('/:id', postController.deletePost)

module.exports = router