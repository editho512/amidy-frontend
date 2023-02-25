<template>
  <div class="grid grid-cols-7 items-center space-x-4 border-b border-gray-400 py-2">
    <div class=" max-xl:pt-2 max-xl:flex  col-span-1">
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
    <div class="col-span-6">
      <div class="grid grid-cols-5">
        <div class="col-span-1 max-lg:col-span-5">
          <p class="text-sm font-medium text-gray-900 truncate ">
            {{ item.reference }}
          </p>
        </div>
        <div class="col-span-2 max-lg:col-span-5">
          <p class="text-sm text-gray-500 truncate ">
            {{ item.name }}
          </p>
        </div>
        <div class="col-span-2 max-lg:col-span-5">
          <p class="text-sm text-gray-500 truncate ">
            {{ convertToPrice(total_amount) }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { convertToPrice, amount_ttc } from '../../assets/js/helpers'

export default {
  components: {
  },
  props: {
    item: {
      type: Object,
      default() {
        return []
      }
    },

  },
  methods: { convertToPrice },
  computed: {
    total_amount() {
      return amount_ttc(this.item.pivot.price, this.item.pivot.quantity, this.item.pivot.tva ?? 0)

    }
  }
}
</script>
