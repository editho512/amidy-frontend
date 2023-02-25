<template>
  <div class="relative">
    <button v-on:click="isOpenned = !isOpenned"
      class="w-8 h-8 bg-third border-2 border-white text-white  rounded-full flex justify-center items-center">
      <span>E</span>
    </button>
    <div v-if="isOpenned" class="absolute top-[98%] left-1/4 w-0 h-0
                border-l-[6px] border-l-transparent
                border-t-[9px] border-t-third
                border-r-[6px] border-r-transparent
                "></div>
    <div v-if="isOpenned"
      class="absolute top-[125%] right-1/4 bg-primary text-white z-50 w-[300px] border-2 border-third p-2 rounded-md">
      <menuProfileComponent></menuProfileComponent>
    </div>
  </div>
</template>
<script>
import menuProfileComponent from './menuProfileComponent.vue';
export default {
  components: {
    menuProfileComponent
  },
  data() {
    return {
      isOpenned: false
    }
  }
}

</script>
