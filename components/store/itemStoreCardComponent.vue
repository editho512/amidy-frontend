<template>
  <div class="col-span-1  w-full max-w-sm bg-white rounded-lg shadow-md border border-gray-300 ">
    <NuxtLink :to="'/store/show/' + myProduct.id" class="text-gray-200">
      <!-- <img  src="/docs/images/products/apple-watch.png" alt="product image" /> -->
      <img v-if="myProduct.photos[0] != undefined" class="p-8 h-[400px] w-full rounded-t-lg"
        :src="$axios.defaults.baseURL + '/uploads/product/' + myProduct.photos[0].photo" :alt="myProduct.name">
      <div v-else class="p-8 h-[400px] w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className=" h-full w-full fill-current ">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

      </div>


    </NuxtLink>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-600">{{ myProduct.name }}</h5>
      </a>

      <div class="flex items-center justify-between">
        <span class="text-md font-bold text-gray-600 ">{{ convertToPrice(myProduct.price_ttc) }}</span>
        <ButtonStoreCardComponent :myProduct="myProduct"></ButtonStoreCardComponent>
      </div>
    </div>
  </div>
</template>
<script>
import { convertToPrice } from '../../assets/js/helpers'
import ButtonStoreCardComponent from './buttonStoreCardComponent.vue'
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
    convertToPrice,
  },
  components: { ButtonStoreCardComponent }
}
</script>
