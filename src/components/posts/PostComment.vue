<template>
  <div
    class="px-2 py-1 mb-2 rounded rounded-b-none bg-gray-200 border-gray-300 border-b shadow"
    v-html="$getLayout(comment)"
  />
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
