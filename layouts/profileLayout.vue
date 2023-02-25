<template>
  <div>
    <div class="">
      <sideBarStoreComponent></sideBarStoreComponent>
    </div>
    <div class="grid grid-cols-7">
      <div class="col-span-1 max-md:hidden pt-8 pl-1">
        <div class="bg-primary rounded-md p-1 min-h-[70vh] text-white">

        </div>

      </div>
      <div class="col-span-6 max-md:col-span-7 mt-8 bg-gray-100 rounded-lg m-2 p-2 h-[70vh]">

        <nuxt />

      </div>
    </div>

  </div>
</template>
<script>
import sideBarStoreComponent from '../components/layout/sideBarStoreComponent.vue'
export default {
  components: { sideBarStoreComponent, }
}
</script>
