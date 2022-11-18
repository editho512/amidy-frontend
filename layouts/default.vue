<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="col-span-2 p-2">
      </div>
      <div class="col-span-2">
        <div class="flex justify-center gap-6 h-20 pt-6 pr-4 pb-2 border-b-2 border-primary rounded-l-sm">
          <div class=" hover:border-b hover:border-third ">
            <a href="" class="hover:text-third text-primary  font-semibold ">Home</a>
          </div>
          <div class=" hover:border-b hover:border-third">
            <a href="" class="hover:text-third text-primary font-semibold">Store</a>
          </div>
          <div class=" hover:border-b hover:border-primary">
            <a href="" class="hover:text-third text-primary font-semibold">Sign up</a>
          </div>
          <div class=" hover:border-b hover:border-third">
            <a href="" class="hover:text-third text-primary font-semibold">Log in</a>
          </div>
          <div class=" hover:border-b hover:border-third">
            <a href="" class="hover:text-third text-primary font-semibold">Contact</a>
          </div>

        </div>

      </div>
      <div class="col-span-2">
        <div class="flex justify-end pt-6 pr-4">
          <langSwitcherComponent></langSwitcherComponent>
        </div>

      </div>
    </div>

    <Nuxt />
  </div>
</template>
<script>

import langSwitcherComponent from '../components/widget/langSwitcherComponent.vue';
export default {
  head() {
    return this.$nuxtI18nHead()
  },
  components: {
    langSwitcherComponent
  }
}
</script>
