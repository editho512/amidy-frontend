<template>
  <div class="flex justify-center">
    <button class="px-2 bg-gray-400 hover:bg-gray-500 rounded-full text-white"
      v-on:click="quantity = parseFloat(quantity) + parseFloat(quantity > 0 ? 1 : 0)">+</button>

    <input class="text-center bg-transparent border-b border-gray-200 focus:border-gray-300 outline-none" type="text"
      v-model="quantity">
    <button class="px-2 bg-gray-400 hover:bg-gray-500 rounded-full text-white"
      v-on:click="quantity -= parseFloat(quantity > 1 ? 1 : 0)">-</button>
  </div>
</template>
<script>
export default {
  props: {
    myQuantity: {
      type: String,
      default: 1
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
