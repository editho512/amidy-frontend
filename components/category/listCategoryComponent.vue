<template>
  <div>
    <searchComponent :my-search="search" @search="(data) => {
      page = 1
      search = data
      getCategories('onClick')

    }"></searchComponent>
    <listCategorySkeleton v-if="categoryList == undefined || categoryList.length == 0"></listCategorySkeleton>
    <tableComponent v-else>
      <template #table-header>
        <tr>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max">
            Name
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5">
            Actions
          </th>
        </tr>
      </template>
      <template #table-body>
        <tr v-for="(category, key) in categoryList" :key="key"
          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {{ category.name }}
          </td>

          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <editButton @edit="$router.push({ path: localePath('/article/category/edit/' + category.id) })"></editButton>
            <removeButton @remove="$router.push({ path: localePath('/article/category/delete/' + category.id) })"></removeButton>
          </td>
        </tr>

      </template>
    </tableComponent>
    <pagination v-if="total > 0" :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
      :has-more-pages="hasMorePages" :max-visible-buttons="totalPages" @pagechanged="(data) => {
        page = data
        getCategories('onClick')
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
import searchComponent from '../widget/searchComponent.vue';
import listCategorySkeleton from './listCategorySkeleton.vue';


import categoryListMixin from '../../mixins/category/categoryListMixin';
import paginationMixin from '../../mixins/paginationMixin';
import searchMixin from '../../mixins/searchMixin';

export default {
  mixins: [searchMixin, paginationMixin, categoryListMixin],
  props: {
    type: {
      type: String,
      default: 'article'
    }
  },
  components: {
    tableComponent, seeButton, editButton, removeButton, pagination, searchComponent, listCategorySkeleton
  },
  created: function () {
    this.getCategories(this.type)
  },
}
</script>
