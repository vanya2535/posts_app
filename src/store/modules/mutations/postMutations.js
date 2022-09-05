export default {
  SET_POSTS(state, data) {
    state.posts = data
  },

  SET_AUTHORS(state, data) {
    state.authors = data
  },

  ADD_POST(state, data) {
    state.posts.push(data)
  }
}
