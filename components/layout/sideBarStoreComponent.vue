<template>
  <div>
    <div class="grid grid-cols-5  relative">
      <!-- logo -->
      <div class="col-span-2 text-third">
        <p class="text-2xl p-2 font-Montserra "> <span class="font-graffiti">A</span>MIDY</p>
      </div>
      <!-- logo -->
      <!-- sidebar -->
      <div class="col-span-3  flex flex-col max-md:static relative">
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
          class="flex  justify-center max-lg:gap-4  gap-8 max-md:flex-col max-sm:pr-0 bg-primary max-md:rounded-none rounded-l-full p-4 max-lg:pl-4  pl-24 max-md:absolute top-full left-8 right-8 w-84 text-white max-md:text-third z-45"
          :class="isOpenned ? '' : 'max-md:hidden'">
          <itemSidebarCustomerComponent url="home" name="Home"></itemSidebarCustomerComponent>
          <itemSidebarCustomerComponent url="store" name="STORE"></itemSidebarCustomerComponent>
          <li class="font-bold">LOGIN</li>
          <li class="font-bold">SIGN UP</li>
          <li class="font-bold">CONTACT US</li>
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
export default {
  components: { itemSidebarCustomerComponent },
  data() {
    return {
      isOpenned: false

    }
  },

}

</script>


