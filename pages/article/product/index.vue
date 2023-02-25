<template>
  <div>
    <h1 class="title-1"> {{ $t('sidebar.product') }} </h1>

    <cardComponent>
      <template #header-card>

        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('product.title') }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <addButton @add="$router.push({ path: localePath('/article/product/add') })"></addButton>
          </div>
        </div>

      </template>
      <template #body-card>
        <listProductComponent></listProductComponent>
      </template>
    </cardComponent>
  </div>
</template>

<script>
import cardComponent from '../../../components/widget/cardComponent.vue';
import addButton from '../../../components/button/addButton.vue';
import listProductComponent from '../../../components/product/listProductComponent.vue';

export default {
  middleware: ['auth'],

  layout: 'adminLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    addButton, cardComponent, listProductComponent
  },
  mounted() {
    if (this.$route.query.action != undefined) {
      let action = this.$route.query.action
      let message = this.$t('product.list.' + action)

      this.$notify({ type: 'success', text: message })
    }

  }

}

</script>
