export const state = () => ({
  order: [],
  error: [],
  paymentMethod: 0,
  creditCard : {},
  errorCreditCard : false

})

export const getters = {
  getOrder: state => {
      return state.order
  },
  getError: state => {
    return state.error
  },
  getPaymentMethod: state => {
    return state.paymentMethod
  },
  getCreditCard: state => {
    return state.creditCard
  },
  getErrorCreditCard: state => {
    return state.errorCreditCard
  }

}

export const mutations = {
  setOrder(state, order) {
    state.order = order
  },
  setError(state, error) {
    state.error = error
  },
  setPaymentMethod(state, item) {
    state.paymentMethod = item
  },
  setCreditCard(state, card) {
    state.creditCard = card
  },
  setErrorCreditCard(state, error){
    state.errorCreditCard = error
  }
}

export const actions = {
  async setOrder({ commit, state }, order) {

    order = order.map((el) => {
                return {id : el.id, quantity : el. quantity}
    })

    return await this.$axios.$post('/api/order/add/', {order})
      .then((data) => {
        // commit(setError, [])
         commit('setOrder', data.data)
      })
      .catch(({ response }) => {
         if(response.data.errors != undefined) commit('setError', response.data.errors)
         return response.data
       })

  },
  async setPayment({ commit, state }, order) {
    let post = { paymentMethod: state.paymentMethod }

    if(state.paymentMethod == 1) post.creditCard = state.creditCard

    return await this.$axios.$post('/api/order/pay/' + order.id, post)
      .then((data) => {
        // commit(setError, [])
         commit('setOrder', data.data)
        if(state.errorCreditCard) commit("setErrorCreditCard", false)
      })
      .catch(({ response }) => {
         if(response.data.errors != undefined) commit('setError', response.data.errors)
          console.log(response.data.message)
         if(response.data.message == "The card number is not a valid credit card number.")  commit("setErrorCreditCard", true)
         return response.data
       })
  },
  async setDelivery({ commit, state }, order) {


    return await this.$axios.$get('/api/order/deliver/' + order.id)
      .then((data) => {
        // commit(setError, [])
         commit('setOrder', data.data)
        if(state.errorCreditCard) commit("setErrorCreditCard", false)
      })
      .catch(({ response }) => {
         if(response.data.errors != undefined) commit('setError', response.data.errors)
         return response.data
       })
  }
}
