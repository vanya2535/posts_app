<template>
  <div>
    <DropdownSelect v-model="sortValue" :options="sortOptions" />
    <DropdownSelect v-model="filterValue" filter :options="filterOptions" />
    <PostItem v-for="post in ALL_POSTS" :key="post.id" :post="post" />
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
      filterValue: { key: 'Не выбрано', value: '' },
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
        { key: 'Не выбрано', value: '' },
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
