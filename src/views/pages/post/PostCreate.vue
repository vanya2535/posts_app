<template>
  <div>
    <form @submit.prevent="createPost" @keydown.enter="createPost">
      <FormInput
        v-model="form.author.name"
        label="Имя автора"
        :error="errors.authorName"
        @input="errors.authorName = ''"
      />

      <FormInput
        v-model="form.author.email"
        label="E-mail автора"
        :error="errors.authorEmail"
        @input="errors.authorEmail = ''"
      />

      <FormInput
        v-model="form.title"
        label="Заголовок"
        :error="errors.title"
        @input="errors.title = ''"
      />

      <FormInput
        v-model="form.description"
        textarea
        label="Описание"
        :error="errors.description"
        @input="errors.description = ''"
      />

      <button :disabled="pending" type="submit">Опубликовать новость</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormInput from '@/components/elements/FormInput'

export default {
  name: 'PostCreate',
  components: { FormInput },

  data() {
    return {
      pending: false,

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
        this.pending = true

        if (this.form.author.name.length < 3) {
          this.errors.authorName = 'Минимальная длина имени автора - 3 символа'
        }
        if (!this.form.author.email.includes('@')) {
          this.errors.authorEmail = 'Введите корректный адрес электронной почты'
        }
        if (this.form.title.length < 3) {
          this.errors.title = 'Минимальная длина заголовка новости - 3 символа'
        }
        if (this.form.description.length < 10) {
          this.errors.description =
            'Минимальная длина описания новости - 10 символов'
        }

        if (Object.values(this.errors).some((error) => error.length !== 0)) {
          return
        }

        await this.CREATE_POST(this.form)
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      } finally {
        this.pending = false
      }
    }
  }
}
</script>
