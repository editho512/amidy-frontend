<template>
  <div class="relative">
    <button v-on:click="isOpenned = !isOpenned"
      :class="['text-third border border-third hover:bg-gray-100 px-4 rounded-full transition-transform duration-300 hover:scale-110 relative shadow-lg', isOpenned ? 'bg-gray-200': '']">
      <cartIcon h="8" w="8"></cartIcon>
      <span v-if="cartNumber > 0" class="bg-primary absolute -right-4 w-8 h-8 pt-1 rounded-full text-white">{{
    cartNumber
}}</span>
    </button>
    <div v-if="isOpenned"
      class="bg-gray-50 absolute mt-1 top-full  max-md:-right-[30vw] max-md:w-[80vw] max-lg:-right-[25vw] max-lg:w-[50vw] -right-[18vw]  w-[40vw] z-50 rounded-lg p-4 border border-gray-400">
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-4">
            <cartItemComponent v-for="(myCart, index) in cart" :key="index + '-' + myCart.id" :item="myCart">
            </cartItemComponent>
          </li>

        </ul>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 max-lg:col-span-2 mt-2">
          <p class="text-primary max-lg:text-center">
            Total amout : {{ convertToPrice(totalAmount) }}

          </p>
        </div>
        <div v-if="cartNumber > 0" class="col-span-1 max-lg:col-span-2 mt-2">
          <div class="flex justify-end gap-3 max-lg:justify-center">
            <button
              class="border border-red-500 rounded-full text-red-500 px-2 hover:bg-red-100 transition-transform duration-300 hover:scale-110">
              <cancelIcon></cancelIcon> <span>Cancel</span>
            </button>
            <button
              class="border border-primary rounded-full text-primary px-2 hover:bg-green-100 transition-transform duration-300 hover:scale-110">
              <validateIcon></validateIcon> <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartIcon from '../icon/cartIcon.vue';
import cancelIcon from '../icon/cancelIcon.vue'
import validateIcon from '../icon/validateIcon.vue'

import { mapGetters, mapMutations, mapActions } from 'vuex'
import cartItemComponent from './cartItemComponent.vue';
import { convertToPrice } from '../../assets/js/helpers'

export default {
  components: { cartIcon, cartItemComponent, cancelIcon, validateIcon },
  data() {
    return {
      isOpenned: false
    }
  },
  computed: {
    ...mapGetters(
      {
        cartNumber: 'cartStore/getCartNumber',
        cart: 'cartStore/getCart',
        totalAmount: 'cartStore/getTotalAmount'
      })
  },
  methods: {
    convertToPrice,

  }
}
</script>
