<template>
  <div>
    <div class="grid grid-cols-5  relative bg-gray-100">
      <!-- logo -->
      <div class="col-span-2 text-third ">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <p class="app-logo text-2xl p-2 font-Montserra "> <span class="font-graffiti">A</span>MIDY</p>
          </div>
          <div class="col-span-3 pt-3">
            <div class="max-md:absolute left-[46%] flex   justify-center">
              <cartButtonComponent>
              </cartButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <!-- logo -->
      <!-- sidebar -->
      <div class="col-span-3  flex flex-col max-md:static relative z-49">
        <div class=" hidden   max-md:flex max-md:justify-end pr-8 pt-3">
          <button class="" v-on:click="isOpenned = !isOpenned">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
        <ul
          class="flex  justify-end max-lg:gap-4  gap-8 max-md:flex-col max-sm:pr-0 bg-primary max-md:rounded-none rounded-l-full p-4 max-lg:pl-4  pl-24 max-md:absolute top-full left-8 right-8 w-84 text-white max-md:text-third z-50"
          :class="isOpenned ? '' : 'max-md:hidden'">
          <itemSidebarCustomerComponent url="home" name="HOME"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent url="store" name="STORE"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent v-if="!$auth.loggedIn" url="login" name="LOG IN"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent v-if="!$auth.loggedIn" url="signup" name="SIGN UP">
          </itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent v-if="!$auth.loggedIn" url="contact-us" name="CONTACT US">
          </itemSidebarCustomerComponent>
          <li class="max-md:hidden" v-if="$auth.loggedIn">
            <profileCardComponent></profileCardComponent>
          </li>
          <li class="px-2 w-full border-t-2 border-third pt-2 hidden max-md:block">
            <menuProfileComponent></menuProfileComponent>

          </li>
        </ul>

        <div
          class="max-md:hidden absolute -left-4 top-[24%] text-white bg-third rounded-full border-4 border-primaryLight h-8 w-8 flex justify-center items-center z-50">
          <span class="font-graffiti">A</span>
        </div>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
import itemSidebarCustomerComponent from './itemSidebarCustomerComponent.vue';
import cartButtonComponent from '../cart/cartButtonComponent.vue';
import profileCardComponent from './profileCardComponent.vue';
import menuProfileComponent from './menuProfileComponent.vue';

import appLogoAnimate from "../../gsap/appLogoAnimate.js"

export default {
  components: { itemSidebarCustomerComponent, cartButtonComponent, profileCardComponent, menuProfileComponent },
  data() {
    return {
      isOpenned: false
    }
  },
  mounted() {
    appLogoAnimate.app_logo_animate()
  }
}

</script>


