import { ObjectToFormData } from '../assets/js/helpers'


export const state = () => ({
  setting : {}
})

export const getters = {
  getSetting: (state) => {
    return state.setting
  },

}

export const mutations = {
  setting(state, setting) {
    state.setting = setting
  },
}

export const actions = {
  async updateSetting({ commit, state }) {
    let formData = ObjectToFormData(state.setting)

    return await this.$axios.$post('/api/setting/add/',
      formData,
      { 'Content-Type': 'multipart/form-data' }
    )
      .then((data) => data)
      .catch(({ response }) => response.data)
  }
}
