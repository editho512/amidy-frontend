<template>
  <div>
    <div class="grid grid-cols-5  relative">
      <!-- logo -->
      <div class="col-span-2 text-third">
        <p class="home-log text-2xl p-2 font-Montserra "> <span class="font-graffiti">A</span>MIDY</p>
      </div>
      <!-- logo -->
      <!-- sidebar -->
      <div class="col-span-3  flex flex-col ">
        <div class=" hidden   max-md:flex max-md:justify-end pr-8 ">
          <button class="" v-on:click="isOpenned = !isOpenned">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
        <ul
          class="flex  justify-end   gap-4 max-md:flex-col max-sm:pr-0 max-md:bg-primary p-4 max-lg:pl-4  pl-24 max-md:absolute top-full left-8 right-8 w-84 text-white max-md:text-third z-50"
          :class="isOpenned ? '' : 'max-md:hidden'">
          <itemSidebarCustomerComponent url="home" name="HOME"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent url="store" name="STORE"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent v-if="!$auth.loggedIn" url="login" name="LOG IN"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent v-if="!$auth.loggedIn" url="signup" name="SIGN UP">
          </itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent url="store" name="STORE"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent url="about-us" name="ABOUT US">
          </itemSidebarCustomerComponent>
          <li class="max-md:hidden" v-if="$auth.loggedIn">
            <profileCardComponent></profileCardComponent>
          </li>
          <li class="px-2 w-full border-t-2 border-third pt-2 hidden max-md:block">
            <menuProfileComponent></menuProfileComponent>

          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
import itemSidebarCustomerComponent from './itemSidebarCustomerComponent.vue';
import profileCardComponent from './profileCardComponent.vue';
import menuProfileComponent from './menuProfileComponent.vue';

import { mapGetters, mapMutations, mapActions } from 'vuex'
import gsap from 'gsap'

export default {
  components: { itemSidebarCustomerComponent, profileCardComponent, menuProfileComponent },
  data() {
    return {
      isOpenned: false

    }
  },
  computed: {
    ...mapGetters({
      logged: "auth/loggedIn"
    })
  },
  mounted() {
    let home_head = gsap.timeline()

    gsap.set(".home-log", { scale: 0 })

    home_head.to(".home-log", { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" })
  }
}

</script>

<style>
.text-montsera {
  font-family: 'Montsera', sans-serif;
}
</style>
