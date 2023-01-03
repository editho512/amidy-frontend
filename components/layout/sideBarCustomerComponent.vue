<template>
  <div>
    <div class="grid grid-cols-5  relative">
      <!-- logo -->
      <div class="col-span-2 text-third">
        <p class="text-2xl p-2 font-Montserra "> <span class="font-graffiti">A</span>MIDY</p>
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
          class="flex  justify-center   gap-4 max-md:flex-col max-sm:pr-0 max-md:bg-primary p-4 max-lg:pl-4  pl-24 max-md:absolute top-full left-8 right-8 w-84 text-white max-md:text-third z-50"
          :class="isOpenned ? '' : 'max-md:hidden'">
          <li class="font-bold">HOME</li>
          <itemSidebarCustomerComponent url="store" name="STORE"></itemSidebarCustomerComponent>
          <li class="font-bold">LOGIN</li>
          <li class="font-bold">SIGN UP</li>
          <li class="font-bold">CONTACT US</li>
        </ul>
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

<style>
.text-montsera {
  font-family: 'Montsera', sans-serif;
}
</style>
