<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <PostAuthor :author="post.author" />
  </div>
</template>

<script>
import PostAuthor from './PostAuthor'

export default {
  name: 'PostBody',
  components: { PostAuthor },

  props: {
    post: {
      type: Object,
      required: true,

      validator: (post) =>
        ['title', 'description', 'author'].every((field) =>
          post.hasOwnProperty(field)
        )
    }
  }
}
</script>
