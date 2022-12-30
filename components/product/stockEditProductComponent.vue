<template>
  <div class="">
    <div class="my-2">
    <input type="text" name="stock" placeholder="Saisissez le stock" v-model="stock" :class="['w-full h-10 px-3 mx-2 bg-transparent opacity-75 outline outline-none rounded-sm transition ease-in-out delay-75 duration-200 border-b-2   focus:placeholder-blue-200 ',
      (errors.stock == undefined || errors.stock[0] == undefined) ? ' text-blue-200 placeholder-white' : ' text-red-500 border-red-500 placeholder-red-500'
    ]">
    </div>
    <div class="my-2 flex justify-end">
        <button class="btn-success bg-blue-700 hover:bg-blue-800 hover:text-blue-200" v-on:click="$emit('change', stock)">Changer</button>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    errors: {
      type: Object,
      default() {
        return {}
      }
    },
    myStock: {
      type: String,
      default: ''
    },

  },
  data() {
    return {
      stock: this.myStock,
    }
  },
}

</script>
