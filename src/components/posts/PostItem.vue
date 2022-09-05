<template>
  <router-link :to="`/post/${post.id}`">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'PostItem',

  props: {
    post: {
      type: Object,
      required: true,

      validator: (post) =>
        ['id', 'title', 'description'].every((field) =>
          post.hasOwnProperty(field)
        )
    }
  }
}
</script>
