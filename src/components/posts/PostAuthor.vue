<template>
  <div>
    <p>{{ author.name }}</p>
    <p>{{ author.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostAuthor',

  props: {
    author: {
      type: Object,
      required: true,

      validator: (author) =>
        author.hasOwnProperty('name') && author.hasOwnProperty('email')
    }
  }
}
</script>
