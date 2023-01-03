<template>

  <div class="h-screen relative">
    <notifications position="bottom right" classes="vue-notification" />

    <!-- shadow-->
    <div v-if="sideBarView" class="absolute top-4 right-4 z-50">
      <button class="text-white" v-on:click="sideBarView = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </button>

    </div>

    <!-- shadow-->
    <!--Navbar-->
    <NavbarComponent :sideBarOpened="sideBarView" @toggleSideBar="sideBarView = !sideBarView"></NavbarComponent>
    <!--Navbar-->
    <div class="grid grid-cols-12 h-5/6 drop-shadow-md ">
      <SidebarComponent class="max-lg:hidden" v-bind:is-open="sideBarView">
      </SidebarComponent>
      <transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" :css="false">
        <SidebarComponent class="hidden max-lg:flex" v-if="sideBarView" v-bind:is-open="sideBarView">
        </SidebarComponent>
      </transition>
      <div v-show="contentView"
        :class="['col-span-10  bg-gray-100 shadow-inner p-1 transition duration-1000 max-lg:col-sm-0  max-lg:col-span-12  z-50',]">

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
import gsap from 'gsap'

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
      contentView: true
    }
  },
  methods: {
    onBeforeEnter(el) {
      console.log("lasa")
      gsap.set(el, {
        xPercent: -100,
      })
    },
    onEnter,
    onLeave(el, done) {
      gsap.to(el, {
        duration: 0.3,
        ease: 'ease-out'
      })
      gsap.to(el, {
        duration: 0.3,
        xPercent: -100,
        onComplete: () => {
          done()
        }
      })
    }
  }
}



function onEnter(el, done) {
  gsap.to(el, {
    duration: 0.4,
    xPercent: 0,
    ease: 'ease-in',
    onComplete: done
  })
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
