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
        <statisticProductSkeleton v-if="product == undefined || Object.keys(product).length == 0">
        </statisticProductSkeleton>
        <statisticProductComponent v-else :myProduct="product"></statisticProductComponent>
        <div class="mt-3">
          <tabsComponent :active-key="selectedTab"
            :options="[$t('product.show.photos'), $t('product.show.orders'), $t('product.show.deliveries')]"
            @change="(data) => changeTabs(data)"></tabsComponent>
        </div>
        <div v-if="selectedTab === 0">
          <showPhotoListSkeleton v-if="product.photos == undefined || product.photos.length == 0">
          </showPhotoListSkeleton>
          <div v-else class="grid my-4">
            <div class="flex flex-wrap justify-center">
              <div v-for="(img, key) in product.photos" :key="key"
                class="p-1 m-2 bg-white border rounded max-sm:w-full max-lg:w-1/3 w-1/5 transform transition duration-300 hover:scale-105 relative">
                <img :src="$axios.defaults.baseURL + '/uploads/product/' + img.photo" alt="" class="h-full">
              </div>
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
import productEditMixin from '../../../../mixins/product/productEditMixin';
import tabsComponent from '../../../../components/widget/tabsComponent.vue';

import statisticProductComponent from '../../../../components/product/statisticProductComponent.vue';
import statisticProductSkeleton from '../../../../components/product/statisticProductSkeleton.vue';
import showPhotoListSkeleton from '../../../../components/product/showPhotoListSkeleton.vue';
export default {
  layout: 'adminLayout',
  mixins: [productEditMixin],
  components: {
    cardComponent, backIcon, statisticProductComponent, tabsComponent, statisticProductSkeleton, showPhotoListSkeleton
  },
  data() {
    return {
      selectedTab: 0
    }
  },
  created() {
    if (this.$route.query.tabs) this.changeTabs(this.$route.query.tabs)
  },
  methods: {
    changeTabs(key) {
      this.selectedTab = parseInt(key)
    }
  },
}

</script>
