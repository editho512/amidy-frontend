<template>
  <div>
    <div class="">
      <sideBarStoreComponent></sideBarStoreComponent>
    </div>
    <nuxt />
    <footerComponent class="mt-8 mb-0"></footerComponent>
  </div>
</template>
<script>
import sideBarStoreComponent from '../components/layout/sideBarStoreComponent.vue'
import footerComponent from '../components/layout/footerComponent.vue';
export default {
  components: { sideBarStoreComponent, footerComponent }
}
</script>
