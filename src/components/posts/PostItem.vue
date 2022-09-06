<template>
  <div
    class="px-4 py-2 bg-slate-200 hover:bg-slate-300 shadow-lg rounded-md cursor-pointer"
    @click="$router.push(`/post/${post.id}`)"
  >
    <h1 class="text-sm lg:text-base font-bold">{{ post.title }}</h1>
    <p class="text-xs lg:text-sm" v-html="$getLayout(post.description)" />
  </div>
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
