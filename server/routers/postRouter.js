const Router = require('express')
const postController = require('../controllers/postController')

const router = new Router()

router.get('/', postController.getPosts)
router.get('/authors', postController.getAuthors)
router.post('/', postController.createPost)
router.get('/:id', postController.getPostInfo)

module.exports = router
