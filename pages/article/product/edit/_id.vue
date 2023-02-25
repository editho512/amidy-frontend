<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.product') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 v-if="product.reference != undefined" class="title-2">{{
              $t('product.edit.title', { name:
                product.reference + " - " + product.name
            }) }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <backIcon @back="$router.push({ path: localePath('/article/product') })"></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <newProductComponent v-if="Object.keys(product).length > 0" :myProduct="product"></newProductComponent>
      </template>
      <template #footer-card>
        <!-- <div class="flex justify-end pr-2 gap-2">
          <cancelButton @cancle="$router.push({ path: localePath('/article/product/') })"></cancelButton>
          <validateButton :loading="false" ></validateButton>
        </div> -->
      </template>

    </cardComponent>
  </div>
</template>
<script>
import cardComponent from '../../../../components/widget/cardComponent.vue';
import backIcon from '../../../../components/button/backButton.vue';
import newProductComponent from '../../../../components/product/newProductComponent.vue';
import productEditMixin from '../../../../mixins/product/productEditMixin'

export default {
  middleware: ['auth'],

  layout: 'adminLayout',
  mixins: [productEditMixin],
  components: {
    cardComponent, backIcon, newProductComponent
  }
}

</script>
