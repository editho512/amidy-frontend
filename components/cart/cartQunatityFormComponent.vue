<template>
  <div>
    <div class="flex justify-center">
      <button class="px-2 bg-gray-400 hover:bg-gray-500 rounded-full text-white"
        v-on:click="quantity = parseFloat(quantity) + parseFloat(quantity > 0 ? 1 : 0)">+</button>

      <input
        :class="['text-center bg-transparent border-b  focus:border-gray-300 outline-none', error.length > 0 ? 'border-red-400' : 'border-gray-200']"
        type="text" v-model="quantity">
      <button class="px-2 bg-gray-400 hover:bg-gray-500 rounded-full text-white"
        v-on:click="quantity -= parseFloat(quantity > 1 ? 1 : 0)">-</button>
    </div>
    <div v-if="error.length > 0" class="flex justify-center mt-1">
      <p class="text-center text-red-400">{{ error[0] }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    myQuantity: {
      default: 1
    },
    error: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      quantity: this.myQuantity
    }
  },
  watch: {
    quantity(newQuantity, oldQuantity) {
      this.$emit("update", this.quantity)
    }
  }
}
</script>
