<template>
  <div class="max-[400px]:mt-[45%]">
    <div class="h-[15vh] max-[400px]:h-[32vh]">
      <div class="home-second">
        <h3 class="text-center  font-Montserra  text-primary font-bold  text-6xl  mt-8 ">
          <span class="opacity-0  home-second-title">
            Our best products
          </span>
        </h3>

      </div>
    </div>
    <div class="min-h-[70vh]">
      <div
        class="mt-4 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-4 justify-items-center home-second-store">
        <itemStoreCardComponent v-for="(product, index) in products" :key="product.id" :my-product="product"
          :class="' home-second-product-' + index">
        </itemStoreCardComponent>
      </div>
    </div>
  </div>
</template>
<script>

import itemStoreCardComponent from '../store/itemStoreCardComponent.vue';

export default {
  props: {
    products: {
      type: Array,
      return: function () {
        return []
      }
    }
  },
  components: {
    itemStoreCardComponent
  },

}

</script>
