<template>
  <ul>
    <li v-if="!hide.includes('Pay on delivery')"
      :class="['border border-gray-300 p-1 rounded-md mt-2', paymentMethod === 0 ? 'border-gray-300' : 'border-gray-200']">
      <button v-on:click="setMethod(0)"
        :class="[' rounded-md px-2 py-4 w-full hover:bg-gray-100', paymentMethod === 0 ? 'bg-gray-200' : '']">
        <span class="text-gray-600">
          Pay on delivery
        </span>
      </button>
    </li>
    <li v-if="!hide.includes('Credit card')"
      :class="['border border-gray-300 p-1 rounded-md mt-2', paymentMethod === 1 ? 'border-gray-300' : 'border-gray-200']">
      <button v-on:click="setMethod(1)"
        :class="[' rounded-md px-2 py-4 w-full hover:bg-gray-100', paymentMethod === 1 ? 'bg-gray-200' : '']">
        <span class="text-gray-600">
          Credit card
        </span>
      </button>
    </li>

  </ul>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: {
    hide: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters({ paymentMethod: "orderStore/getPaymentMethod" })
  },
  methods: {
    ...mapMutations({
      setMethod: 'orderStore/setPaymentMethod'
    })
  }
}
</script>
