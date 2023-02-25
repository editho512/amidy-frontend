<template>
  <div class="pt-2 ">
    <div v-if="order.products != undefined">
      <orderShowItemComponent v-for="(product, index) in order.products" :key="index" :item="product">
      </orderShowItemComponent>
    </div>
    <div class="mt-8">
      <p class="text-gray-600 text-right font-bold">
        Total amount : {{ convertToPrice(totalAmount) }}
      </p>

    </div>
  </div>
</template>
<script>
import { convertToPrice, amount_ttc } from '../../assets/js/helpers'

import orderShowItemComponent from './orderShowItemComponent.vue'
export default {
  components: { orderShowItemComponent },
  props: {
    order: {
      type: Object,
      defualt() {
        return {}
      }
    }
  },
  methods: { convertToPrice },
  computed: {

    totalAmount() {
      let total = 0
      if (this.order.products != undefined) {

        this.order.products.forEach((el, index) => {
          total += amount_ttc(el.pivot.price, el.pivot.quantity, el.pivot.tva ?? 0)
        })
      }
      return total
    }
  }
}
</script>
