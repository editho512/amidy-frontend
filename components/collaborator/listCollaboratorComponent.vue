<template>
  <tableComponent>
    <template #table-header>
      <tr>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left">
          Name
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left">
          Email
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left">
          Phone
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left">
          Actions
        </th>
      </tr>
    </template>
    <template #table-body>
      <tr v-for="(user, key) in userList" :key="key" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {{ user.name}} {{ user.firstname}}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {{user.email}}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {{user.phone}}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <seeButton></seeButton>
          <editButton></editButton>
          <removeButton></removeButton>
        </td>
      </tr>

    </template>
  </tableComponent>

</template>

<script>
import tableComponent from '../widget/tableComponent.vue'
import seeButton from '../button/seeButton.vue';
import editButton from '../button/editButton.vue';
import removeButton from '../button/removeButton.vue';

import userListMixin from '../../mixins/user/userListMixin';
export default {
  mixins : [userListMixin],
  components: {
    tableComponent, seeButton, editButton, removeButton
  }
}
</script>
