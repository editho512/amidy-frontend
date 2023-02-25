<template>
  <div>
    <searchComponent :my-search="search" @search="(data) => {
      page = 1
      search = data
      getOrderList('onClick', user_id)


    }"></searchComponent>
    <orderListSkeleton v-if="orderList == undefined || orderList.length == 0"></orderListSkeleton>
    <tableComponent v-else>
      <template #table-header>
        <tr>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max max-md:block hidden">
            Orders
          </th>

          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max max-md:hidden">
            Reference
          </th>
          <th scope="col"
            class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max grid grid-cols-3 max-md:hidden">
            <div class="col-span-2 pt-3">
              Date
            </div>
            <div class="col-span-1">
              <sortComponent :my-order="sortBy.created_at" @sort="(sense) => {
                sortBy.created_at = sense
                getOrderList('onClick', user_id)
              }"></sortComponent>
            </div>
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max max-md:hidden">
            Status
          </th>
          <th v-if="$auth.user.type != 'Customer'"
            class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max max-md:hidden">Customer</th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5 max-md:hidden">
            Actions
          </th>
        </tr>
      </template>
      <template #table-body>
        <tr v-for="(order, key) in orderList" :key="key"
          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 ">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-md:block hidden">
            <div class="hidden max-md:block mt-1 text-center">
              <p class="font-extrabold"> {{ order.reference }} - {{ order.date }}</p>
            </div>
            <div class="hidden max-md:block mt-1 text-center">
              <p> {{ order.user.name }} {{ order.user.first_name ?? '' }}</p>
            </div>
            <div class="hidden max-md:block mt-1 text-center">
              <p> {{ order.status_full }}</p>
            </div>
            <div class="hidden max-md:block mt-2 text-center">
              <editButton @edit="$router.push({ path: localePath('/order/payment/' + order.id) })"></editButton>
              <removeButton v-if="parseInt(order.status) > 0"
                @remove="$router.push({ path: localePath('/article/tag/delete/' + order.id) })">
              </removeButton>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-md:hidden">
            {{ order.reference }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-md:hidden">
            {{ order.date }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-md:hidden">
            {{ order.status_full }}
          </td>
          <td v-if="$auth.user.type != 'Customer'"
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-md:hidden">
            {{ order.user.name + (order.user.first_name == undefined ? '' : (' - ' + order.user.first_name)) }}
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <editButton @edit="$router.push({ path: localePath('/order/payment/' + order.id) })"></editButton>
            <removeButton v-if="parseInt(order.status) > 0"
              @remove="$router.push({ path: localePath('/article/tag/delete/' + order.id) })">
            </removeButton>
          </td>
        </tr>

      </template>
    </tableComponent>
    <pagination v-if="total > 0" :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
      :has-more-pages="hasMorePages" :max-visible-buttons="totalPages" @pagechanged="(data) => {
        page = data
        getOrderList('onClick', user_id)

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
import sortComponent from '../widget/sortComponent.vue';
import searchMixin from '../../mixins/searchMixin';
import sortMixin from '../../mixins/sortMixin'
import paginationMixin from '../../mixins/paginationMixin';
import orderListMixin from '../../mixins/order/orderListMixin';
import orderListSkeleton from './orderListSkeleton.vue'

export default {
  mixins: [searchMixin, sortMixin, paginationMixin, orderListMixin],

  components: {
    tableComponent, seeButton, editButton, removeButton, pagination, searchComponent, sortComponent, orderListSkeleton
  },
  created() {
    this.getOrderList("onLoad", this.user_id)
  },
  computed: {
    user_id() {
      return this.$auth.user.type == "Customer" ? this.$auth.user.id : 0
    }
  }
}
</script>
