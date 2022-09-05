<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Index',

  methods: {
    ...mapActions('posts', ['GET_POSTS'])
  },

  created() {
    this.GET_POSTS()
  }
}
</script>
