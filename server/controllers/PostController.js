const Post = require('../models/Post')

class PostContoller {
  async getPosts(req, res) {
    try {
      const { author, sort } = req.query

      const posts = await Post.find()
        .where('author.name')
        .equals(author)
        .sort(`${sort === 'asc' ? '-' : '+'}title`)

      return res.status(200).json(posts)
    } catch (e) {
      console.log(e)
      return res
        .status(400)
        .json({ message: 'Ошибка в процессе получения списка новостей' })
    }
  }

  async getAuthors(req, res) {
    try {
      const posts = await Post.find()
      return res.status(200).json(posts.map(({ author }) => author))
    } catch (e) {
      console.log(e)
      return res
        .status(400)
        .json({ message: 'Ошибка в процессе получения списка новостей' })
    }
  }

  async getPostInfo(req, res) {
    try {
      const post = await Post.findById(req.params.id)

      if (!post) {
        return res.status(404).json('Новость не найдена')
      }

      return res.status(200).json(post)
    } catch (e) {
      console.log(e)
      return res
        .status(400)
        .json({ message: 'Ошибка в процессе получения данных новости' })
    }
  }

  async createPost(req, res) {
    try {
      const { title, description, author } = req.body

      const post = new Post({
        id: Date.now(),
        title,
        description,
        author,
        comments: []
      })

      await post.save()
      return res.status(200).json(post)
    } catch (e) {
      console.log(e)
      return res
        .status(400)
        .json({ message: 'Ошибка в процессе создания новости' })
    }
  }
}

module.exports = new PostContoller()
