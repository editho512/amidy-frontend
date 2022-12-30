<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.tag') }}</h1>

    <cardComponent>
      <template #header-card>

        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('tag.title') }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <addButton @add="$router.push({ path: localePath('/article/tag/add') })"></addButton>
          </div>
        </div>

      </template>
      <template #body-card>

        <listTagComponent></listTagComponent>

      </template>
    </cardComponent>
  </div>
</template>
<script>
import cardComponent from '../../../components/widget/cardComponent.vue';
import addButton from '../../../components/button/addButton.vue';
import listTagComponent from '../../../components/tag/listTagComponent.vue'

export default {
  layout: 'adminLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    addButton, listTagComponent, cardComponent
  },
  mounted() {
    if (this.$route.query.action != undefined) {
      let action = this.$route.query.action
      let message = this.$t('tag.list.' + action)

      this.$notify({ type: 'success', text: message })
    }

  }

}

</script>


