<template>
  <div>
    <div class="grid grid-cols-8  pt-8 mx-4 p-2 mt-3  rounded-md">
      <div class="col-span-4 max-md:col-span-8 pl-1">
        <photoStoreComponent v-if="product.photos != undefined && product.photos[0] != undefined"
          :photos="product.photos" />

      </div>
      <div class="col-span-4 max-md:col-span-8 pl-3">
        <div class="">
          <h1 class="text-slate-400 font-extrabold text-4xl pt-2">{{ product.name }}</h1>
          <p class="text-md font-bold text-slate-500 my-8 text-4xl">{{ convertToPrice(product.price_ttc) }}</p>

          <p class="w-full my-8 text-slate-400 text-lg">
            {{ product.description }}
          </p>
          <div class="my-4">
            <p v-for="(attribut, index) in product.attributs"
              class="bg-white pl-2 py-4 my-8  flex  rounded-md text-slate-500 border border-slate-300 gap-1">
              <span>{{ attribut.name }}</span>
              <span>-</span>
              <span class="font-bold">{{ attribut.value }}</span>
            </p>
          </div>
          <div class="flex justify-end mt-8">
            <buttonStoreCardComponent :my-product="product"></buttonStoreCardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import editProductMixin from "../../../mixins/product/productEditMixin"
import buttonStoreCardComponent from "../../../components/store/buttonStoreCardComponent.vue";
import photoStoreComponent from "../../../components/store/photoStoreComponent.vue";

import { convertToPrice } from "../../../assets/js/helpers";
export default {
  auth: 'guest',
  layout: 'storeLayout',
  mixins: [editProductMixin],
  components: { buttonStoreCardComponent, photoStoreComponent },
  methods: {
    convertToPrice
  }
}
</script>
