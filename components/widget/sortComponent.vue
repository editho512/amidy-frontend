<template>
  <div class="flex flex-col">
    <button :class="['hover:opacity-80', order == 'asc' ? 'opacity-100' : 'opacity-50']"
    v-on:click="sort('asc')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
    <button :class="['hover:opacity-80', order == 'desc' ? 'opacity-100' : 'opacity-50']"
      v-on:click="sort('desc')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    myOrder: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      order : this.myOrder
    }
  },
  methods: {
    sort(sense){
      if (sense === 'asc') this.order = this.order == 'asc' ? null : 'asc'
      else this.order = this.order == 'desc' ? null : 'desc'
      this.$emit('sort', this.order)
    }
  }
}
</script>
