<template>
  <div>

    <div class="grid grid-cols-2">
      <div class="col-span-1 max-md:col-span-2 px-2">
        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label for="name" class="app-label">{{ $t('product.add.name') }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <input type="text" name="name" :class="['app-input', errors.name != undefined ? 'app-input-error' : '']"
              :placeholder="$t('product.add.placeholderName')"
              @input="(e) => customVModel(e.target.name, e.target.value)" :value="product.name">
            <div class="app-input-error-message" v-if="errors.name != undefined">{{ errors.name[0] }}</div>

          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label for="stock_alert" class="app-label">{{ $t("product.add.stock_alert") }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <input type="number" name="stock_alert" :class="['app-input', errors.stock_alert != undefined ? 'app-input-error' : '']"
              :placeholder="$t('product.add.placeholderStockAlert')"
              @input="(e) => customVModel(e.target.name, e.target.value)" :value="product.stock_alert">
            <div class="app-input-error-message" v-if="errors.stock_alert != undefined">{{ errors.stock_alert[0] }}</div>

          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label for="description" class="app-label">{{ $t("product.add.description") }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <textarea name="description" id="" cols="30" rows="10"
            :class="['app-input', errors.description != undefined ? 'app-input-error' : '']"
              :placeholder="$t('product.add.placeholderDescription')" @input="(e) => customVModel(e.target.name, e.target.value)"
              :value="product.description"
            ></textarea>

            <div class="app-input-error-message" v-if="errors.description != undefined">{{ errors.description[0] }}</div>

          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label for="unit" class="app-label">{{ $t("product.add.unit") }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <input type="text" name="unit"
              :class="['app-input', errors.unit != undefined ? 'app-input-error' : '']"
              :placeholder="$t('product.add.placeholderUnit')" @input="(e) => customVModel(e.target.name, e.target.value)"
              :value="product.unit">
            <div class="app-input-error-message" v-if="errors.unit != undefined">{{ errors.unit[0] }}</div>

          </div>
        </div>

      </div>

      <div class="col-span-1 max-md:col-span-2 px-2">
        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
              <label class="app-label">{{ $t('product.add.category') }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <multiselect v-model="category" :options="categoryList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" :placeholder="$t('product.add.placeholderCategory')" label="name" track-by="name"
              :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label class="app-label">{{ $t('product.add.tag') }} :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <multiselect v-model="tag" :options="tagList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" :placeholder="$t('product.add.placeholderTag')" label="name" track-by="name"
              :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>

        <div class="grid grid-cols-4 mt-5">
          <div class="col-span-1 max-md:col-span-4">
            <label class="app-label">Attribus :</label>
          </div>
          <div class="col-span-3 max-md:col-span-4">
            <formAttributProductComponent :myAttributs="myProduct.attributs"  @attributs="(data) => customVModel('attributs', data)" :myErrors="attributsErrors"></formAttributProductComponent>
          </div>
        </div>
      </div>

    </div>
    <div v-if="photos != undefined && photos.length > 0" class="grid my-4">
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(img, key) in photos"
            :key="key"
            class="p-1 m-2 bg-white border rounded max-sm:w-full max-lg:w-1/3 w-1/5 transform transition duration-300 hover:scale-105 relative"
          >
              <img :src="$axios.defaults.baseURL + '/uploads/product/' + img.photo " alt="" class="h-full">

              <button
              v-on:click="setPrincipalPhoto(key)"
                v-if="img.order === null"
                class="absolute top-2 right-10 text-gray-600 rounded-full bg-white  border-gray-400 bg-opacity-50 hover:bg-opacity-100 transform transition duration-200 hover:scale-110 ">
                <photoIcon h='6' w='6'></photoIcon>
              </button>
              <button
                v-on:click="deletePhoto(key)"
                class="absolute top-2 right-2 text-gray-600 rounded-full bg-white  border-gray-400 bg-opacity-75 hover:bg-opacity-100 transform transition duration-200 hover:scale-110 ">
                <closeIcon h='6' w='6'></closeIcon>
              </button>


          </div>
        </div>
    </div>
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <DropFile @uploaded="(files) => customVModel('photos', files)" extension=".jpeg,.png,.jpg,.gif,.pdf"></DropFile>
        <div class="flex justify-center">
          <ul class="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">

            <li v-for="(err, index) in photoErrors" class="flex items-center">
              <svg class="w-4 h-4 mr-1.5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"></path>
              </svg>
              {{ err[1][0] }}
            </li>
          </ul>
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
import DropFile from '../../components/widget/dropFile/dropFile.vue'
import formAttributProductComponent from './formAttributProductComponent.vue';
import closeIcon from '../icon/closeIcon.vue'
import photoIcon from '../icon/photoIcon.vue'

import { mapGetters, mapMutations, mapActions } from 'vuex'
import { getObjectKeyBegin } from '../../assets/js/helpers'

export default {
  mixins:[categoryListMixin, tagListMixin],
  components: {
    cancelButton, validateButton, Multiselect, DropFile, formAttributProductComponent, closeIcon, photoIcon
  },
  computed: {
    photoErrors(){
      //get the errors that the name start with photos
      return Object.keys(this.errors).length > 0 ? getObjectKeyBegin(this.errors, 'photos') : []
    },
    attributsErrors() {
      let errors = Object.keys(this.errors).length > 0 ? getObjectKeyBegin(this.errors, 'attributs') : []

      let res = []

      errors.forEach((el, i) => {
        let keys = el[0].split('.')
        res[keys[1]] = res[keys[1]] != undefined ? res[keys[1]] : {}

        if (el[0].includes('name') && el[1] != undefined) res[keys[1]].name = el[1][0]
        if (el[0].includes('value') && el[1] != undefined) res[keys[1]].value = el[1][0]

      })

      return res
    }
  },
  created() {
    this.getCategories()
    this.getTags()

    if (this.action('edit')) {
      this.category = this.product.categories
      this.tag = this.product.tags
      this.product['photos'] = []
      this.product['attributs'] = JSON.stringify(this.myProduct['attributs'])
    }

  },

  data() {
    return {
      product: { ...this.myProduct },
      errors: {},
      category: [],
      tag: [],
      photos: this.myProduct['photos'] !== undefined ? [...this.myProduct['photos']] : []
    }
  },

  props: {
    myProduct: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },

  methods: {
    setPrincipalPhoto(key) {

      this.photos = this.photos.map((el) => {
        let res = el
        res.order = null
        return res
      })

      this.photos[key].order = 1
    },
    deletePhoto(key) {
      this.photos.splice(key, 1);
    },
    action(action = 'add') {
      let url = this.$route.path.split('/');
      return url.filter(el => el === action).length > 0
    },
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
      let category = this.category.map((el) => el.id)
      let tag = this.tag.map((el) => el.id)

      if(category.length > 0) this.product['category'] = this.category.map((el) => el.id)
      if(tag.length > 0) this.product['tag'] = this.tag.map((el) => el.id)


      if (this.action()) {

        this.setProduct({ ...this.product})
        await this.addProduct().then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/product'), query: { action: 'added' } })
          else this.errors = res.errors
        })
      }

      else if (this.action('edit') && this.product.id != undefined) {
        this.product['photos_updated'] = JSON.stringify(this.photos)

        this.setProduct({ ...this.product })

        await this.editProduct().then((res) => {
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

