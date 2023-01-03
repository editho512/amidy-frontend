<template>
  <li class="font-bold"> <nuxt-link :to="localePath('/' + url)">{{ name }}</nuxt-link>
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
  }
}
</script>
