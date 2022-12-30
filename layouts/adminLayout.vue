<template>

  <div class="h-screen relative">
    <notifications position="bottom right" classes="vue-notification" />

    <!-- shadow-->
    <div v-if="sideBarView" class="absolute top-4 right-4 z-50">
      <button class="text-white" v-on:click="closeSideBar(false)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </button>

    </div>
    <div v-if="sideBarView" class="bg-third w-screen h-screen absolute opacity-25 hidden max-lg:block z-40">
    </div>
    <!-- shadow-->
    <!--Navbar-->
    <NavbarComponent @toggleSideBar="openSideBar(true)"></NavbarComponent>
    <!--Navbar-->
    <div class="grid grid-cols-12 h-5/6 drop-shadow-md ">
      <SidebarComponent v-bind:is-open="sideBarView" v-bind:content-view="sideBarContentView"></SidebarComponent>
      <div
        :class="['col-span-10  bg-gray-100 shadow-inner p-1 transition duration-1000  max-lg:col-span-12 transform', contentView ? 'max-lg:hidden' : '']">

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
  },
  data() {
    return {
      sideBarView: false,
      sideBarContentView: false,
      contentView: false
    }
  },
  methods: {
    openSideBar(value) {
      this.contentToggle(true)
      this.sideBarView = value != undefined ? value : !this.sideBarView

    },
    closeSideBar(value) {
      this.sideBarView = value != undefined ? value : !this.sideBarView
      setTimeout(() => {
        this.sideBarContentToggle(false)
        this.contentToggle(false)

      }, 500)
    },
    contentToggle(value) {
      this.contentView = value != undefined ? value : !this.contentView
    },
    sideBarContentToggle(value) {
      this.sideBarContentView = value != undefined ? value : !this.sideBarContentView
    }
  }
}

</script>

<style>
.vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;

  background: #44A4FC;
  border-left: 5px solid #187FE7;


}

.default-enter-active,
.default-leave-active {
  transition: opacity .1s;
}

.default-enter,
.default-leave-active {
  opacity: 0;
}
</style>
