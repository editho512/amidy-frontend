export const state = () => ({
  email: '',
  password: ''
})

export const mutations = {

  email(state, email ) {
    state.email = email
  },
  password(state, password ) {
    state.password = password
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

  }
}
