<template>
  <div class="px-4 py-2 bg-slate-200 shadow-lg rounded-md">
    <h1 class="text-lg font-bold">{{ post.title }}</h1>
    <p class="text-sm" v-html="$getLayout(post.description)" />
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
