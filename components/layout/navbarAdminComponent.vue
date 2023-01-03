<template>
  <div class="relative grid grid-cols-12 h-1/8">
    <div v-if="sideBarOpened" class="bg-third w-full h-full opacity-25 hidden max-lg:block absolute inset-0 z-20">
    </div>
    <div class="bg-primary text-white max-lg:col-span-1 col-span-2 flex justify-center pt-2 ">
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </div>

    </div>
    <div class="bg-white-900  col-span-10  py-1">
      <div class="grid grid-cols-3 flex-col items-center">
        <div class="col-span-1 text-gray-400 hidden max-lg:block">
          <button class="" v-on:click="$emit('toggleSideBar')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
        <div class="col-span-2 max-lg:col-span-1">
          <div class="flex flex-col justify-items-start">
            <div class="text-lg text-gray-700">
              Paperpillar Design Studio
            </div>
            <div class="text-sm text-gray-600 flex  items-center gap-1 ">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                Indonesia
              </div>
            </div>
          </div>
          <div>

            <!--

              -->

          </div>
        </div>
        <div class="colspan-1 flex justify-end pr-4">
          <langSwitcherComponent></langSwitcherComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import langSwitcherComponent from '../widget/langSwitcherComponent.vue';

export default {
  components: {
    langSwitcherComponent
  },
  props: {
    sideBarOpened: {
      type: Boolean,
      default: false
    }
  },

}
</script>


