<template>
  <div class="flex flex-col items-end text-xs text-gray-600">
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
