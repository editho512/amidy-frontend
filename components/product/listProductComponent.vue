<template>
  <div>
    <searchComponent :my-search="search" @search="(data) => {
      page = 1
      search = data
      getProducts('onClick')

    }"></searchComponent>
    <listProductSkeleton v-if="productList == undefined || productList.length == 0"></listProductSkeleton>
    <tableComponent v-else>
      <template #table-header>
        <tr>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5 ">
            <div class="grid grid-cols-3">
              <div class="col-span-2 max-sm:text-center">
                Reference
              </div>
              <div class="col-span-1">
                <sortComponent :my-order="sortBy.reference" @sort="(sense) => {
                  sortBy.reference = sense
                  getProducts('onClick')
                }"></sortComponent>
              </div>

            </div>
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5 max-md:hidden">
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                Name
              </div>
              <div class="col-span-1">
                <sortComponent :my-order="sortBy.name" @sort="(sense) => {
                  sortBy.name = sense
                  getProducts('onClick')
                }"></sortComponent>
              </div>
            </div>
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5 max-lg:hidden">
            <div class="grid grid-cols-3">
              <div class="col-span-2">
                Stock
              </div>
              <div class="col-span-1">
                <sortComponent :my-order="sortBy.stock" @sort="(sense) => {
                  sortBy.stock = sense
                  getProducts('onClick')
                }"></sortComponent>
              </div>

            </div>
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5 max-sm:hidden">
            Actions
          </th>
        </tr>
      </template>
      <template #table-body>

        <tr v-for="(product, key) in productList" :key="key">
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

            <p class="text-left max-sm:text-center">
              {{ product.reference }}
            </p>
            <div class="hidden max-lg:block mt-1 max-sm:text-center">
              <p> <span>Stock : </span> {{ product.stock + " " + product.unit }}</p>
            </div>
            <div class="hidden max-md:block max-sm:text-center">
              <p> <span>Name : </span> {{ product.name }}</p>
            </div>
            <div class="hidden max-sm:block max-sm:text-center">
              <seeButton @see="$router.push({ path: localePath('/article/product/show/' + product.id) })"></seeButton>
              <editButton @edit="$router.push({ path: localePath('/article/product/edit/' + product.id) })">
              </editButton>
              <removeButton @remove="$router.push({ path: localePath('/article/product/delete/' + product.id) })">
              </removeButton>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">{{ product.name }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">{{ product.stock + " "
              +
              product.unit
          }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <seeButton @see="$router.push({ path: localePath('/article/product/show/' + product.id) })"></seeButton>
            <editButton @edit="$router.push({ path: localePath('/article/product/edit/' + product.id) })"></editButton>
            <removeButton @remove="$router.push({ path: localePath('/article/product/delete/' + product.id) })">
            </removeButton>
          </td>
        </tr>
      </template>
    </tableComponent>
    <pagination v-if="total > 0" :total-pages="totalPages" :total="total" :per-page="perPage"
      :current-page="currentPage" :has-more-pages="hasMorePages" :max-visible-buttons="totalPages" @pagechanged="(data) => {
        page = data
        getProducts('onClick')
      }">
    </pagination>
  </div>

</template>

<script>
import tableComponent from '../widget/tableComponent.vue'
import seeButton from '../button/seeButton.vue';
import editButton from '../button/editButton.vue';
import removeButton from '../button/removeButton.vue';
import pagination from '../widget/pagination.vue';
import sortComponent from '../widget/sortComponent.vue';
import searchComponent from '../widget/searchComponent.vue';
import listProductSkeleton from './listProductSkeleton.vue';
import productListMixin from '../../mixins/product/productListMixin'
import paginationMixin from '../../mixins/paginationMixin';
import searchMixin from '../../mixins/searchMixin';
import sortMixin from '../../mixins/sortMixin';


export default {
  mixins: [sortMixin, searchMixin, paginationMixin, productListMixin],

  components: {
    tableComponent, seeButton, editButton, removeButton, searchComponent, pagination, sortComponent, listProductSkeleton
  },
  created: function () {
    this.getProducts()
  },
}
</script>
