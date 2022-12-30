<template>
  <div class="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3">
    <div class="col-span-1 m-2">
      <dashCardComponent myClass="text-white bg-gradient-to-br from-third to-primary">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </template>
        <template #body>
          <h3 class="my-1 text-2xl ">{{ $t('product.show.sellingPrice') }}</h3>
          <p class="my-2 text-xl">{{ convertToPrice(myProduct.price) }}</p>
          <div class="mb-100 my-3" v-if="open.priceForm">
            <priceEditProductComponent :errors="errorsPrice" @change="(data) => validatePrice(data)"
              :my-price="myProduct.price" :my-tva="myProduct.tva"></priceEditProductComponent>
          </div>
        </template>
        <template #action>
          <button class="h-5" v-on:click="open.priceForm = !open.priceForm">
            <editIcon></editIcon>
          </button>
        </template>
      </dashCardComponent>

    </div>
    <div class="col-span-1 m-2">
      <dashCardComponent myClass="text-white bg-gradient-to-br from-third to-blue-500">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </template>
        <template #body>
          <h3 class="my-1 text-2xl ">{{ $t('product.show.stock') }}</h3>
          <p class="my-2 text-xl">{{ myProduct.stock }} <span>{{ myProduct.unit }}</span></p>
          <div class="mb-100 mt-3" v-if="open.stockForm">
            <stockEditProductComponent :my-stock="myProduct.stock" :errors="errorsStock"
              @change="(data) => validateStock(data)"></stockEditProductComponent>
          </div>
        </template>
        <template #action>
          <button class="h-5" v-on:click="open.stockForm = !open.stockForm">
            <editIcon></editIcon>
          </button>
        </template>
      </dashCardComponent>

    </div>
    <div class="col-span-1 m-2">
      <dashCardComponent myClass="text-white bg-gradient-to-br from-third to-red-500">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>

        </template>
        <template #body>
          <h3 class="my-1 text-2xl ">{{ $t('product.show.ordered') }}</h3>
          <p class="my-2 text-xl">20 pieces</p>
        </template>
        <template #action>
          <editIcon></editIcon>
        </template>
      </dashCardComponent>

    </div>

    <div class="col-span-1 m-2">
      <dashCardComponent myClass="text-white bg-gradient-to-br from-third to-yellow-500">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>

        </template>
        <template #body>
          <h3 class="my-1 text-2xl ">{{ $t('product.show.delivered') }}</h3>
          <p class="my-2 text-xl">200 Piéce</p>
        </template>
        <template #action>
          <editIcon></editIcon>
        </template>
      </dashCardComponent>

    </div>
  </div>
</template>
<script>
import dashCardComponent from '../widget/dashCardComponent.vue';
import editIcon from '../icon/editIcon.vue';
import priceEditProductComponent from './priceEditProductComponent.vue'
import stockEditProductComponent from './stockEditProductComponent.vue';

import { mapActions, mapMutations } from 'vuex'
import { convertToPrice } from '../../assets/js/helpers'

export default {
  props: {
    myProduct: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    editIcon, dashCardComponent, priceEditProductComponent, stockEditProductComponent
  },
  data() {
    return {
      open: {
        priceForm: false,
        stockForm: false
      },
      errorsPrice: {},
      errorsStock: {}
    }
  },
  methods: {
    convertToPrice,
    ...mapActions({
      updatePrice: 'productStore/updatePrice',
      updateStock: 'productStore/updateStock'

    }),
    validatePrice(data) {
      this.setPrice(data);
      this.updatePrice(this.myProduct.id).then((res) => {
        if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/product'), query: { action: 'updated' } })
        else this.errorsPrice = res.errors
      });

    },
    validateStock(data) {
      this.setStock(data)
      this.updateStock(this.myProduct.id).then((res) => {
        if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/product'), query: { action: 'updated' } })
        else this.errorsStock = res.errors
      });
    },
    ...mapMutations({
      setPrice: 'productStore/price',
      setStock: 'productStore/stock'

    })
  }
}
</script>
