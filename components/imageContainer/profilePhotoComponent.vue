<template>
<div class="col-span-1 max-lg:col-span-3 relative">
  <svg v-show="url == null" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="text-gray-400 bg-gray-100 w-60 h-60 rounded-full">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>

  <img v-show="url != null" :src="url" alt="" class="w-60 h-60 rounded-full">
  <button class="" v-on:click="$emit('focusPhoto')">
    <div class="absolute top-[200px] left-[100px] bg-white p-2 rounded-full border-2 border-primary  hover:bg-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 text-primary font-extrabold">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>

    </div>

  </button>

</div>
</template>
<script>

export default {
  props: {
    url: {
      type: String,
      default: null
    }
  }
}

</script>
