<template>
  <div class="h-screen">
    <!--Navbar-->
    <NavbarComponent></NavbarComponent>
    <!--Navbar-->
    <div class="grid grid-cols-12 h-5/6 drop-shadow-md ">
      <SidebarComponent></SidebarComponent>
      <div class="col-span-10 max-lg:col-span-11 bg-gray-100 shadow-inner p-1">

        <nuxt></nuxt>

      </div>
    </div>
    <div class="flex justify-start ">
      <p class="text-gray-600 pt-4">
        EDITHO ALEX RANDRIAMAHAZOSOA
      </p>
    </div>
  </div>
</template>
<script>

import SidebarComponent from '../components/layout/sidebarAdminComponent.vue';
import NavbarComponent from '../components/layout/navbarAdminComponent.vue';

export default {
  head() {
    return this.$nuxtI18nHead()
  },
  components: {
    SidebarComponent, NavbarComponent
    }
}

</script>
