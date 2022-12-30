<template>
  <div :class="['grid grid-cols-5 rounded-lg w-full', myClass]">
    <div class="col-span-1 flex flex-row  justify-center items-center m-1 rounded-lg border-2 border-white">
      <slot name="icon"></slot>
    </div>
    <div class="col-span-3 flex flex-col pl-1 ">
      <slot name="body"></slot>
    </div>
    <div class="col-spans-1 flex flex-row justify-end pt-1 pr-1">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    myClass: {
      type: String,
      default: 'text-white bg-gradient-to-br from-third to-primary'
    }
  }
}
</script>
