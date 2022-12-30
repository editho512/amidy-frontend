<template>
  <div class="w-full place-self-start">
    <nuxt-link v-if="submenus.length == 0" :to="localePath('/' + url)" :class="['flex gap-2', active]">
      <slot name="itemIcon"></slot>
      <span class="">
        {{ name }}
      </span>
    </nuxt-link>
    <button v-else class="flex gap-2 w-full relative" @click="show = !show">
      <slot name="itemIcon"></slot>
      <span class="">{{ name }}</span>
      <arrowLeftIcon :class="[' absolute right-4 transition duration-200 ease-in-out ', show ? 'rotate-90' : '']">
      </arrowLeftIcon>

    </button>
    <Transition name="submenus">
      <div v-if="submenus.length > 0 && show" class="flex flex-col mt-2 ml-12 gap-2">
        <nuxt-link v-for="(submenu, index) in submenus" :key="index"
          :class="['border-b border-primary w-full text-left', (isActive() && isActive(submenu.url)) ? 'nuxt-link-exact-active' : '']"
          :to="localePath('/' + url + '/' + submenu.url)">
          {{ submenu.name }}
        </nuxt-link>
      </div>
    </Transition>
  </div>
</template>

<script>
import arrowLeftIcon from '../icon/arrowLeftIcon.vue'

export default {
  components: {
    arrowLeftIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: ''
    },
    submenus: {
      type: Array,
      default() {
        return []
      }
    }

  },
  computed: {
    active() {
      return this.isActive() ? 'nuxt-link-exact-active' : ''
    }
  },
  methods: {
    isActive(url = this.url) {
      let path = this.$route.path.split('/')
      return path.filter((el) => el == url).length > 0
    }
  },
  created() {
    //this.show = this.isActive()
  },
  data() {
    return {
      show: this.isActive()
    }
  }

}

</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.submenus-enter-active {
  transition: all .4s ease;
}

.submenus-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.submenus-enter,
.submenus-leave-to

/* .submenus-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}
</style>
