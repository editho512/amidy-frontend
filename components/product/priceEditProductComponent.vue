<template>
  <div>
    <div class="my-2">
      <input type="text" name="price" placeholder="Saisissez le prix"
      v-model="price"
      :class="['w-full h-10 px-3 mx-2 bg-transparent opacity-75 outline outline-none rounded-sm transition ease-in-out delay-75 duration-200 border-b-2   focus:placeholder-primary ',
        (errors.price == undefined || errors.price[0] == undefined) ? ' text-primary placeholder-white' : ' text-red-500 border-red-500 placeholder-red-500'
      ]"

      >

    </div>
    <div class="my-2">
      <input type="text" name="price" placeholder="Saisissez le TVA"
        v-model="tva"
        :class="['w-full h-10 px-3 mx-2 bg-transparent opacity-75 outline outline-none rounded-sm transition ease-in-out delay-75 duration-200 border-b-2   focus:placeholder-primary ',
                (errors.price == undefined || errors.price[0] == undefined) ? ' text-primary placeholder-white' : ' text-red-500 border-red-500 placeholder-red-500'
              ]"
      >
    </div>
    <div class="my-2 flex justify-end">
        <button class="btn-success" v-on:click="$emit('change', { price, tva})">Changer</button>
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
    myPrice: {
      type: String,
      default : ''
    },
    myTva: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      price :  this.myPrice,
      tva: this.myTva
    }
  },

}
</script>

