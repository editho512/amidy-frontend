<template>
  <div>
    <div class="">
      <sideBarStoreComponent></sideBarStoreComponent>
    </div>
    <nuxt />

  </div>
</template>
<script>
import sideBarStoreComponent from '../components/layout/sideBarStoreComponent.vue'
export default {
  components: { sideBarStoreComponent }
}
</script>
