<template>
  <div>
    <div class="grid grid-cols-3 p-8 gap-8 z-30">
      <div class="col-span-1 max-lg:col-span-3">
        <div class="grid grid-cols-5">
          <div class="col-span-1">
            <label for="category">Category</label>
          </div>
          <div class="col-span-4">
            <multiselect v-model="category" :options="categoryList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" :placeholder="$t('product.add.placeholderCategory')"
              label="name" track-by="name" :preselect-first="true" @input="sortByCategory">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>
      </div>
      <div class="col-span-1 max-lg:col-span-3">
        <div class="grid grid-cols-5">
          <div class="col-span-1">
            <label for="">Tag</label>
          </div>
          <div class="col-span-4">
            <multiselect v-model="tag" :options="tagList" :multiple="true" :close-on-select="false"
              :clear-on-select="false" :preserve-search="true" :placeholder="$t('product.add.placeholderTag')"
              label="name" track-by="name" :preselect-first="true" @input="sortByTag">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single"
                  v-if="values.length &amp;&amp; !isOpen">{{ values.length }} selected</span></template>
            </multiselect>
          </div>
        </div>
      </div>
      <div class="col-span-1 max-lg:col-span-3">
        <searchComponent :my-search="search" @search="(data) => {
          page = 1
          search = data
          getProducts('onClick', '/store')

        }"></searchComponent>
      </div>
    </div>
    <div
      class="mt-4 grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-4 justify-items-center">
      <itemStoreCardComponent v-for="(product, index) in productList" :key="product.id" :my-product="product">
      </itemStoreCardComponent>
    </div>
    <pagination v-if="total > 0" :total-pages="totalPages" :total="total" :per-page="perPage"
      :current-page="currentPage" :has-more-pages="hasMorePages" :max-visible-buttons="totalPages" @pagechanged="(data) => {
        page = data
        getProducts('onClick', '/store')

      }">
    </pagination>
  </div>
</template>
<script>
import paginationMixin from '../../mixins/paginationMixin';
import searchMixin from '../../mixins/searchMixin';
import productListMixin from '../../mixins/product/productListMixin'
import categoryListMixin from '../../mixins/category/categoryListMixin'
import tagListMixin from '../../mixins/tag/tagListMixin'
import itemStoreCardComponent from '../../components/store/itemStoreCardComponent.vue';
import pagination from '../../components/widget/pagination.vue';
import Multiselect from 'vue-multiselect'
import searchComponent from '../../components/widget/searchComponent.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: { itemStoreCardComponent, pagination, Multiselect, searchComponent },
  mixins: [searchMixin, paginationMixin, categoryListMixin, tagListMixin, productListMixin],
  auth: 'guest',
  layout: 'storeLayout',
  data() {
    return {
      category: this.$route.query.category != undefined ? [] : this.$route.query.category,
      tag: []
    }
  },
  methods: {
    sortByCategory() {
      let req = "category=" + JSON.stringify(this.category)
      this.request[0] = req
      this.getProducts('onClick', '/store')

    },
    sortByTag() {
      let req = "tag=" + JSON.stringify(this.tag)
      this.request[1] = req
      this.getProducts('onClick', '/store')

    }

  },
  created() {
    this.setRequest()
    this.getCategories("All")
    this.getTags("All")
    this.getProducts()

    // update selected category
    if (this.$route.query.category) this.category = JSON.parse(this.$route.query.category)

    // update selected tag
    if (this.$route.query.tag) this.tag = JSON.parse(this.$route.query.tag)
  }
}
</script>
