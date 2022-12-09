export const state = () => ({
  product: {}
})

export const mutations = {
  product(state, product) {
    state.product = product
  },
}

export const actions = {

  async add({ commit, state }) {

    return await this.$axios.$post('/api/product/add/',
      state.product,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async edit({ commit, state }, id) {
    return await this.$axios.$patch('/api/product/update/' + id,
      state.product,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async delete({ commit, state }, id) {
    return await this.$axios.$delete('/api/product/delete/' + id,
      state.product,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  }

}
