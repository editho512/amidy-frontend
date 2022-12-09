<template>
  <div>

    <div class="grid grid-cols-2">
      <div class="col-span-1 max-md:col-span-2">
        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1">
            <label for="name" class="app-label">{{ $t('product.add.name') }} :</label>
          </div>
          <div class="col-span-3">
            <input type="text" name="name" :class="['app-input', errors.name != undefined ? 'app-input-error' : '']"
              @input="(e) => customVModel(e.target.name, e.target.value)" :value="product.name">
            <div class="app-input-error-message" v-if="errors.name != undefined">{{ errors.name[0] }}</div>

          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1">
            <label for="stock_alert" class="app-label">Stock alert :</label>
          </div>
          <div class="col-span-3">
            <input type="number" name="stock_alert" :class="['app-input', errors.stock_alert != undefined ? 'app-input-error' : '']"
              @input="(e) => customVModel(e.target.name, e.target.value)" :value="product.stock_alert">
            <div class="app-input-error-message" v-if="errors.stock_alert != undefined">{{ errors.stock_alert[0] }}</div>

          </div>
        </div>
      </div>

      <div class="col-span-1 max-md:col-span-2 pl-2">
        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1">
              <label class="app-label">Category :</label>
          </div>
          <div class="col-span-3">
            <multiselect v-model="category" :options="categoryList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" placeholder="Select categories" label="name" track-by="name"
              :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1">
            <label class="app-label">Tag :</label>
          </div>
          <div class="col-span-3">
            <multiselect v-model="tag" :options="tagList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" placeholder="Select tags" label="name" track-by="name"
              :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>
      </div>

    </div>
    <div class="flex justify-end pr-2 gap-2">
      <cancelButton @cancle="$router.push({ path: localePath('/article/product/') })"></cancelButton>
      <validateButton :loading="false" @validate="save"></validateButton>
    </div>
  </div>
</template>

<script>
import cancelButton from '../button/cancelButton.vue';
import validateButton from '../button/validateButton.vue';
import Multiselect from 'vue-multiselect'
import categoryListMixin from '../../mixins/category/categoryListMixin';
import tagListMixin from '../../mixins/tag/tagListMixin'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mixins:[categoryListMixin, tagListMixin],
  components: {
    cancelButton, validateButton, Multiselect
  },
  created() {
    this.getCategories()
    this.getTags()
  },
  data() {
    return {
      errors: {},
      category: null,
      tag: null
    }
  },

  props: {
    product: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },

  methods: {
    ...mapMutations({
      setProduct: 'productStore/product'
    }),

    ...mapActions({
      addProduct: 'productStore/add',
      editProduct: 'productStore/edit'
    }),

    customVModel(field, value) {
      this.product[field] = value

    },

    async save() {
      let url = window.location.href.split('/');
      this.setProduct({ ...this.product})

      if (url.filter(el => el === 'add').length > 0) {

        await this.addProduct().then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/product'), query: { action: 'added' } })
          else this.errors = res.errors
        })
      }
      else if (url.filter(el => el === 'edit') && this.product.id != undefined) {
        this.setProduct({ ...this.product })
        await this.editProduct(this.product.id).then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/product'), query: { action: 'updated' } })
          else this.errors = res.errors
        })
      }
    },
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>

