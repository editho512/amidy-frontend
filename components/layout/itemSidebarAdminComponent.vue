<template>
  <div class="w-full place-self-start">
    <nuxt-link :to="localePath(url)" :class="['flex gap-2', active ]">
        <slot name="itemIcon"></slot>
      <span class="max-lg:hidden">
          {{ name }}
      </span>
    </nuxt-link>

  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required : true
    },
    url: {
      type: String,
      default : '/'
    },
    is_active: {
      type: Boolean,
      default : false
    }
  },
  computed: {
    active() {
      return this.is_active ? 'active' : ''
    }
  },

}

</script>
