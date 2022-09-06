<template>
  <div v-if="post">
    <PostBody :post="post" />

    <form @submit.prevent="addComment" @keydown.enter="addComment">
      <FormInput
        v-model="comment"
        textarea
        label="Добавьте комментарий"
        class="rounded-b-none"
      />

      <button
        class="w-full p-2 mx-auto rounded rounded-t-none border border-slate-200 shadow-sm shadow-slate-500 bg-gray-100 hover:bg-slate-200 hover:bg-opacity-70 font-medium disabled:opacity-50 outline-none"
        :disabled="pending || !comment.length"
        type="submit"
      >
        Отправить
      </button>
    </form>

    <template v-if="post.comments.length">
      <h1 class="mt-5 font-medium">Комментарии:</h1>

      <PostComment
        v-for="(comment, index) in post.comments"
        :key="index"
        :comment="comment"
      />
    </template>
  </div>
  <div v-else-if="notFound">404 Новость не найдена</div>
</template>

<script>
import { mapActions } from 'vuex'
import PostBody from '@/components/posts/PostBody'
import PostComment from '@/components/posts/PostComment'
import FormInput from '@/components/elements/FormInput'

export default {
  name: 'PostInfo',
  components: { PostBody, PostComment, FormInput },

  data() {
    return {
      post: null,
      notFound: false,
      pending: false,
      comment: ''
    }
  },

  methods: {
    ...mapActions('posts', ['GET_POST_INFO', 'ADD_COMMENT']),

    async addComment() {
      try {
        this.pending = true

        const comment = await this.ADD_COMMENT({
          id: this.$route.params.id,
          comment: this.comment
        })

        this.comment = ''
        this.post.comments.unshift(comment)
      } catch (e) {
        console.error(e)
      } finally {
        this.pending = false
      }
    }
  },

  async created() {
    try {
      const post = await this.GET_POST_INFO(this.$route.params.id)
      this.post = post
    } catch (e) {
      console.error(e)
      this.notFound = true
    }
  }
}
</script>
