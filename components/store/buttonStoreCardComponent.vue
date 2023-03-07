<template>
  <button v-on:click="addToCart" v-if="!isTook(myProduct)"
    class="text-white bg-primary hover:bg-primaryDark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add
    to cart</button>
</template>
<script>
import { convertToPrice } from '../../assets/js/helpers'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: {
    myProduct: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    isTook(item) {
      return this.cart.some((el, i) => {
        return el.id == item.id
      })
    },
    ...mapActions({
      addCart: 'cartStore/add'
    }),
    convertToPrice,
    addToCart() {
      this.addCart({ ...this.myProduct, quantity: 1 })
    }
  },
  computed: {
    ...mapGetters(
      {
        cart: 'cartStore/getCart'
      })
  },
}
</script>
