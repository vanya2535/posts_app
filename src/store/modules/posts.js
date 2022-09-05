import postActions from './actions/postActions'
import postGetters from './getters/postGetters'
import postMutations from './mutations/postMutations'

export default {
  state: () => ({
    posts: [],
    authors: []
  }),
  getters: postGetters,
  actions: postActions,
  mutations: postMutations
}
