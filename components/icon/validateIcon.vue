<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    :class="['inline pb-1 pr-0', 'w-' + w, 'h-' + h]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>


</template>
<script>
export default {
  props: {
    h: {
      type: String,
      default: 4
    },
    w: {
      type: String,
      default: 4
    }
  }
}
</script>
