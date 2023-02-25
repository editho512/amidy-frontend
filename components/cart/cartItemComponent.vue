<template>
  <div class="grid grid-cols-7 items-center space-x-4 border-b border-gray-400 py-2">
    <div class="max-xl:col-span-7 max-xl:pt-2 max-xl:flex justify-center  col-span-1">
      <img v-if="item.photos[0] != undefined" class="w-16 h-16 rounded-full"
        :src="$axios.defaults.baseURL + '/uploads/product/' + item.photos[0].photo" :alt="item.name">
      <div v-else class="w-16 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className=" h-full w-full fill-current ">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

      </div>
    </div>
    <div class="max-xl:col-span-7 max-xl:pt-2 max-xl:flex justify-center col-span-2">
      <p class="text-sm font-medium text-gray-900 truncate ">
        {{ item.reference }}
      </p>
      <p class="text-sm text-gray-500 truncate ">
        {{ item.name }}
      </p>
      <p class="text-sm text-gray-500 truncate ">
        {{ convertToPrice(total_amount) }}
      </p>
    </div>
    <div class="max-xl:col-span-7 max-xl:pt-2 max-xl:flex justify-center col-span-3">
      <cartQunatityFormComponent :my-quantity="parseInt(item.quantity)" :error="error"
        @update="(quantity) => updateQuantity({ item, quantity })">
      </cartQunatityFormComponent>
    </div>
    <div class="max-xl:col-span-7 max-xl:pt-2 max-xl:flex justify-center col-span-1">
      <div class="flex justify-end">
        <button class="text-gray-600" v-on:click="removeItem">
          <removeIcon></removeIcon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { convertToPrice } from '../../assets/js/helpers'
import removeIcon from '../icon/removeIcon.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import cartQunatityFormComponent from './cartQunatityFormComponent.vue'

export default {
  components: {
    removeIcon, cartQunatityFormComponent
  },
  props: {
    item: {
      type: Object,
      default() {
        return []
      }
    },
    error: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    convertToPrice,
    ...mapActions(
      {
        updateQuantity: 'cartStore/updateQuantity',
        remove: 'cartStore/remove',

      }),
    removeItem() {
      this.remove(this.item)
    }
  },
  computed: {
    total_amount() {
      return this.item.price_ttc * this.item.quantity
    }
  }
}
</script>
