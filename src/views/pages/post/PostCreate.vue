<template>
  <div>
    <h1 class="text-2xl font-bold">Лента новостей</h1>

    <form
      class="mt-8 grid gap-6"
      @submit.prevent="createPost"
      @keydown.enter="createPost"
    >
      <div class="grid sm:grid-cols-2 gap-6 sm:gap-10">
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
      </div>

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

      <button
        class="w-full sm:w-1/2 p-2 mt-4 mx-auto rounded border border-slate-200 shadow-sm shadow-slate-500 bg-gray-100 hover:bg-slate-200 hover:bg-opacity-70 font-medium disabled:opacity-50"
        :disabled="pending"
        type="submit"
      >
        Опубликовать новость
      </button>
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
