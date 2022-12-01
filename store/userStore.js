import { ObjectToFormData } from '../assets/js/helpers'

export const state = () => ({
  login : {
    email: '',
    password: '',
  },
  collaborator: {},
  userType : []

})

export const getters = {
  getUser: (state) => {
    return state.login.user
  },
  getUserType: (state) => {
    return state.userType
  },
  getEditUser: (state) => {
    return state.collaborator
  }
}

export const mutations = {

  email(state, email ) {
    state.email = email
  },
  password(state, password ) {
    state.password = password
  },

  collaborator(state, collaborator) {
    state.collaborator = collaborator
  }

}

export const actions = {

  async login({ commit, state }) {
      let res = {
        status: true,
        errors : null
      }

      await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: state.email ,
            password: state.password,
          },
      }).catch(({ response }) => {
          res.status = false
          res.errors = response
        })

      return res

  },
  async addCollaborator({ commit, state }) {

    let formData = ObjectToFormData(state.collaborator)

    return await this.$axios.$post('/api/user/add', formData, { 'Content-Type': 'multipart/form-data' })
    .then((data) => data)
    .catch(({ response }) => response.data )

  },
  async updateCollaborator({ commit, state }, id) {

    let formData = ObjectToFormData({ ...state.collaborator, id: id })

    return await this.$axios.$post('/api/user/update/' + id, formData, { 'Content-Type': 'multipart/form-data' })
    .then((data) => data)
    .catch(({ response }) => response.data )

  },
  async deleteCollaborator({ commit, state }, id) {

    return await this.$axios.$get('/api/user/delete/' + id)
      .then((data) => data)
      .catch(({ response }) => response.data)

  },

}

