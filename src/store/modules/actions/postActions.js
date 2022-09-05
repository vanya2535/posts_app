export default {
  async GET_POSTS({ commit }, query) {
    try {
      let endpoint = '/posts?'

      if (query) {
        if (query.author) {
          endpoint += `&author=${query.author}`
        }

        if (query.sort) {
          endpoint += `&sort=${query.sort}`
        }
      }

      const { data } = await this._vm.$axios.get(endpoint)
      commit('SET_POSTS', data)
      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async GET_AUTHORS({ commit }) {
    try {
      const { data } = await this._vm.$axios.get('/posts/authors')
      commit('SET_AUTHORS', data)
      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async CREATE_POST({ commit }, post) {
    try {
      const { data } = await this._vm.$axios.post(`/posts`, post)
      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async GET_POST_INFO({ commit }, id) {
    try {
      const { data } = await this._vm.$axios.get(`/posts/${id}`)
      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  },

  async ADD_COMMENT({ commit }, { id, comment }) {
    try {
      const { data } = await this._vm.$axios.post(`/posts/${id}/comment`, {
        comment
      })

      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
