<template>
  <div class="w-3/4 h-full mx-auto">
    <form
      class="create"
      @submit.prevent="createPost"
      @keydown.enter="createPost"
    >
      <div>
        <input type="text" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PostCreate',

  data() {
    return {
      form: {
        author: {
          name: '',
          email: ''
        },

        title: '',
        description: ''
      },

      errors: {
        authorName: '',
        authorEmail: '',
        title: '',
        description: ''
      }
    }
  },

  methods: {
    ...mapActions('posts', ['CREATE_POST']),

    async createPost() {
      try {
        if (this.form.author.name.length < 3) {
          this.errors.authorName = 'Минимальная длина имени автора - 3 символа'
        }
        if (!this.form.author.email.includes('@')) {
          this.errors.authorEmail = 'Введите корректный адрес электронной почты'
        }
        if (this.form.title.length > 3) {
          this.errors.title = 'Минимальная длина заголовка новости - 3 символа'
        }
        if (this.form.description.length > 10) {
          this.errors.description = 'Минимальная длина описания новости - 10 символов'
        }

        if (Object.values(this.errors).some((error) => error.length !== 0)) {
          return
        }

        await this.createPost(this.form)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
