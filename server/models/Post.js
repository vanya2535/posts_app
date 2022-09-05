const { model, Schema } = require('mongoose')

const Post = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  author: {
    type: Object,
    required: true
  },

  comments: {
    type: [String],
    required: false,
    default: []
  }
})

module.exports = model('Post', Post)
