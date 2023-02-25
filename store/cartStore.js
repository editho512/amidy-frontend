export const state = () => ({
  cart: [],
})

export const getters = {
  getCart: state => {
      return state.cart
  },
  getCartNumber: state => {
    return state.cart.length != undefined ? state.cart.length : 0
  },
  getTotalAmount: state => {
    let amount = 0
    state.cart.forEach((el) => { if(el.quantity != null && el.price_ttc != null) amount = (parseFloat(el.quantity) * parseFloat(el.price_ttc)) })
    return amount
  },

}

export const mutations = {
  setCart(state, cart) {
    state.cart = this.$cookies.get('cart') != undefined ? this.$cookies.get('cart') : []
  },

  addCart(state, item) {
    state.cart.push(item)
  },
  removeCart(state, item) {
    state.cart = state.cart.filter((el) => el.id != item.id)
  },
  updateQuantity(state, {item, quantity}) {
     state.cart.forEach((element, index) => {
       if(element.id == item.id && state.cart[index] != undefined) state.cart[index].quantity = quantity
     });
  },
  clear(state) {
    state.cart = []
  },

}

export const actions = {

  async add({ commit, state }, cartItem) {
    commit('addCart', cartItem)
    this.$cookies.set('cart', state.cart,{
      path: '/'
    })

  },
  async remove({ commit, state }, cartItem) {
    commit('removeCart', cartItem)

    this.$cookies.set('cart', state.cart,{
      path: '/'
    })

  },
  updateQuantity({ commit, state }, data) {
    commit('updateQuantity', data)
    this.$cookies.set('cart', state.cart,{
      path: '/'
    })
  },
  validate({ commit, state }, loggedIn) {
    console.log("loggin state", loggedIn)
  },
  cancel({ commit, state }) {
    commit('clear')
    this.$cookies.set('cart', state.cart,{
      path: '/'
    })

  }
}
