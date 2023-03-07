<template>
  <div>
    <div>
      <img class=" w-full rounded-t-lg" :src="$axios.defaults.baseURL + '/uploads/product/' + photos[0].photo" alt="">
    </div>
    <div v-if="showMore" class="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 mt-1 ">
      <img class="w-[128px] h-[128px] rounded-md  mt-2" v-for="(photo, index) in photos" v-if="index > 0" :key="photo.id"
        :src="$axios.defaults.baseURL + '/uploads/product/' + photo.photo" alt="">
    </div>
    <div v-else class="flex justify-end">
      <button class="border-b border-slate-400 text-slate-400 py-2 px-3" @click="showMore = true">See more photo</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showMore: true
    }
  },
  methods: {
    setShowMore() {
      this.showMore = (window.innerWidth < 800) ? false : true

    }
  },
  mounted() {
    this.setShowMore()

    window.onresize = () => {
      this.setShowMore()
    }
  }
}
</script>
