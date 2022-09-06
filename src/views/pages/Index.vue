<template>
  <div>
    <h1 class="text-2xl font-bold">Лента новостей</h1>

    <div class="mt-8 max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2">
      <DropdownSelect
        v-model="sortValue"
        class="mr-10"
        label="Сортировать по"
        :options="sortOptions"
      />

      <DropdownSelect
        v-model="filterValue"
        label="Автор новости"
        filter
        :options="filterOptions"
      />
    </div>

    <div
      class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
    >
      <PostItem v-for="post in ALL_POSTS" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DropdownSelect from '@/components/elements/DropdownSelect'
import PostItem from '@/components/posts/PostItem'

export default {
  name: 'Index',
  components: { DropdownSelect, PostItem },

  data() {
    return {
      filterValue: { key: 'Не выбран', value: '' },
      sortValue: { key: 'По возрастанию заголовка', value: 'asc' },

      sortOptions: [
        { key: 'По возрастанию заголовка', value: 'asc' },
        { key: 'По убыванию заголовка', value: 'desc' }
      ]
    }
  },

  computed: {
    ...mapGetters('posts', ['ALL_POSTS', 'ALL_AUTHORS']),

    filterOptions() {
      return [
        { key: 'Не выбран', value: '' },
        ...this.ALL_AUTHORS.map((author) => ({ key: author, value: author }))
      ]
    }
  },

  watch: {
    sortValue: {
      handler({ value }) {
        this.GET_POSTS({ author: this.filterValue.value, sort: value })
      },
      deep: true
    },

    filterValue: {
      handler({ value }) {
        console.log(value)
        this.GET_POSTS({ author: value, sort: this.sortValue.value })
      },
      deep: true
    }
  },

  methods: {
    ...mapActions('posts', ['GET_POSTS', 'GET_AUTHORS'])
  },

  created() {
    this.GET_POSTS({ sort: this.sortValue.value })
    this.GET_AUTHORS()
  }
}
</script>
