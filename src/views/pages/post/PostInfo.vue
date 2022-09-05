<template>
  <div v-if="post">
    <PostBody :post="post" />

    <form submit.prevent="addComment" @keydown.enter="addComment">
      <FormInput
        v-model="comment"
        textarea
        label="Добавьте комментарий"
        :error="commentError"
      />

      <button :disabled="pending" type="submit">Отправить</button>
    </form>

    <h1>Комментарии:</h1>

    <PostComment
      v-for="(comment, index) in post.comments"
      :key="index"
      :comment="comment"
    />
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
      comment: '',
      commentError: ''
    }
  },

  methods: {
    ...mapActions('posts', ['GET_POST_INFO', 'ADD_COMMENT']),

    async addComment() {
      try {
        this.pending = true

        if (this.comment.length < 3) {
          this.commentError = 'Минимальная длина комментария - 3 символа'
          return
        }

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
