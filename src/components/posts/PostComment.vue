<template>
  <div>{{ comment }}</div>
</template>

<script>
export default {
  name: 'PostComment',

  props: {
    comment: {
      type: String,
      required: true
    }
  }
}
</script>
