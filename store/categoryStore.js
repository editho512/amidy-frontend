export const state = () => ({
  category: {}
})

export const mutations = {
  category(state, category) {
    state.category = category
  },
}

export const actions = {

  async add({ commit, state }) {

    return await this.$axios.$post('/api/category/add/',
      state.category,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async edit({ commit, state }, id) {
    return await this.$axios.$patch('/api/category/update/' + id,
      state.category,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async delete({ commit, state }, id) {
    return await this.$axios.$delete('/api/category/delete/' + id,
      state.category,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  }

}
