import { ObjectToFormData, getObjectExceptKey } from '../assets/js/helpers'


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

    let formData = ObjectToFormData(getObjectExceptKey(state.product, 'photos'))
    if (state.product.photos != undefined) {
      for (let i = 0; i < state.product.photos.length; i++) {
        formData.append('photos[]', state.product.photos[i])
      }
    }

    return await this.$axios.$post('/api/product/add/',
      formData, { 'Content-Type': 'multipart/form-data' }
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  },

  async edit({ commit, state }, id) {

    let formData = ObjectToFormData(getObjectExceptKey(state.product, 'photos'))

    if (state.product.photos != undefined) {
      for (let i = 0; i < state.product.photos.length; i++) {
        formData.append('photos[]', state.product.photos[i])
      }
    }


    return await this.$axios.$post('/api/product/update/',
      formData, { 'Content-Type': 'multipart/form-data' }
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
