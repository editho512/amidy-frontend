export const state = () => ({
  cart: [],
  test : [1, 4, 5]
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
    state.cart.forEach((el) => { if(el.quantity != null && el.price != null) amount = (parseFloat(el.quantity) * parseFloat(el.price)) })
    return amount
  }
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
  }
}

export const actions = {

  async add({ commit, state }, cartItem) {
    commit('addCart', cartItem)
    this.$cookies.set('cart', state.cart,)

  },
  async remove({ commit, state }, cartItem) {
    commit('removeCart', cartItem)

    this.$cookies.set('cart', state.cart,)

  },
  updateQuantity({ commit, state }, data) {
    commit('updateQuantity', data)
    this.$cookies.set('cart', state.cart,)
  }
}
