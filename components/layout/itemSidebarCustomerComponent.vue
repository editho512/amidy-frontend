<template>
  <li :class="['font-bold transition duration-300 transform hover:scale-110 hover:text-third hover:border-b hover:border-third',
    $route.path.includes(url) ? 'scale-110 text-third border-b border-third' : '']">
    <nuxt-link :to="localePath('/' + url)">{{ name
    }}</nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },

}
</script>
