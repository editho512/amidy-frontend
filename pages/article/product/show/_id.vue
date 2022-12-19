<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.product') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 v-if="product.reference != undefined" class="title-2">
              {{ $t('product.show.title', { name: product.reference + " - " + product.name }) }}
            </h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <backIcon @back="$router.push({ path: localePath('/article/product') })"></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <div class="flex">
          <div class="grid grid-cols-4 rounded-lg w-1/4  text-white bg-gradient-to-br from-third to-primary">
            <div class="col-span-1 flex flex-row  justify-center items-center m-1 rounded-lg border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>
            <div class="col-span-3 flex flex-col ">
              <h3 class="my-1 text-2xl ">Prix</h3>
              <p class="my-2 text-xl">3.000.000 ar</p>
            </div>
          </div>
        </div>
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
  layout: 'adminLayout',
  mixins: [productEditMixin],
  components: {
    cardComponent, backIcon, newProductComponent
  }
}

</script>
