<template>
  <nuxt-link :to="localePath('/' + url)">
    <li :class="['w-full px-4 py-2 hover:text-green-200 ',
    active ? ' text-primary' : '',
    placeClass]">
      <slot></slot>

    </li>
  </nuxt-link>

</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    active() {
      return this.$route.path.includes(this.name)
    },
    placeClass() {
      let res = "border-b"

      if (this.position === "top") res += " rounded-t-lg"
      else if (this.position === "bottom") res = "rounded-b-lg"

      return res
    }
  }
}
</script>
