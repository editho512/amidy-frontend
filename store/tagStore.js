export const state = () => ({
  tag: {}
})

export const mutations = {
  tag(state, tag) {
    state.tag = tag
  },
}

export const actions = {

  async add({ commit, state }) {

    return await this.$axios.$post('/api/tag/add/',
      state.tag,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async edit({ commit, state }, id) {
    return await this.$axios.$patch('/api/tag/update/' + id,
      state.tag,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async delete({ commit, state }, id) {
    return await this.$axios.$delete('/api/tag/delete/' + id,
      state.tag,
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  }

}
