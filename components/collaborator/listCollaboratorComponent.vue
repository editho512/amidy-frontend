<template>
  <div>
    <searchComponent :my-search="search" @search="(data) => {
  page = 1
  search = data
  getUserList('onClick')

}"></searchComponent>
    <listCollaboratorSkeleton v-if="userList == undefined || userList.length == 0"></listCollaboratorSkeleton>
    <tableComponent v-else>
      <template #table-header>
        <tr>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left grid grid-cols-3">
            <div class="col-span-2">
              Name
            </div>
            <div class="col-span-1">
              <sortComponent :my-order="sortBy.name" @sort="(sense) => {
  sortBy.name = sense
  getUserList('onClick')
}"></sortComponent>
            </div>
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left max-md:hidden">
            Email
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left max-lg:hidden">
            Phone
          </th>
          <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left max-sm:hidden">
            Actions
          </th>
        </tr>
      </template>
      <template #table-body>
        <tr v-for="(user, key) in userList" :key="key"
          class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <p class="text-left max-lg:text-center">
              {{ user.name }} {{ user.firstname }}
            </p>
            <div class="hidden max-lg:block mt-1 text-center">
              <p> <span>Phone : </span> {{ user.phone }}</p>
            </div>
            <div class="hidden max-md:block text-center">
              <p> <span>Email : </span> {{ user.email }}</p>
            </div>
            <div class="hidden max-sm:block text-center">
              <seeButton></seeButton>
              <editButton @edit="$router.push({ path: localePath('/collaborator/edit/' + user.id) })"></editButton>
              <removeButton @remove="$router.push({ path: localePath('/collaborator/delete/' + user.id) })">
              </removeButton>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            {{ user.email }}
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            {{ user.phone }}
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <seeButton></seeButton>
            <editButton @edit="$router.push({ path: localePath('/collaborator/edit/' + user.id) })"></editButton>
            <removeButton @remove="$router.push({ path: localePath('/collaborator/delete/' + user.id) })"></removeButton>
          </td>
        </tr>

      </template>
    </tableComponent>
    <pagination v-if="total > 0" :total-pages="totalPages" :total="total" :per-page="perPage"
      :current-page="currentPage" :has-more-pages="hasMorePages" :max-visible-buttons="totalPages" @pagechanged="(data) => {
  page = data
  getUserList('onClick')
}">
    </pagination>
  </div>

</template>

<script>
import tableComponent from '../widget/tableComponent.vue'
import seeButton from '../button/seeButton.vue';
import editButton from '../button/editButton.vue';
import removeButton from '../button/removeButton.vue';
import pagination from '../../components/widget/pagination.vue'
import sortComponent from '../widget/sortComponent.vue';
import searchComponent from '../widget/searchComponent.vue';

import paginationMixin from '../../mixins/paginationMixin';
import sortMixin from '../../mixins/sortMixin';
import searchMixin from '../../mixins/searchMixin';
import userListMixin from '../../mixins/user/userListMixin';

import listCollaboratorSkeleton from './listCollaboratorSkeleton.vue';
export default {
  mixins: [paginationMixin, sortMixin, searchMixin, userListMixin],
  components: {
    tableComponent, seeButton, editButton, removeButton, pagination, sortComponent, searchComponent, listCollaboratorSkeleton
  },

}
</script>
