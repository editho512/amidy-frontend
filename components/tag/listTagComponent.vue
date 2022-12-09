<template>
  <tableComponent>
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
      <tr v-for="(tag, key) in tagList" :key="key"
        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {{ tag.name }}
        </td>

        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <editButton @edit="$router.push({ path: localePath('/article/tag/edit/' + tag.id) })"></editButton>
          <removeButton @remove="$router.push({ path: localePath('/article/tag/delete/' + tag.id) })"></removeButton>
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
import tagListMixin from '../../mixins/tag/tagListMixin';
export default {
  mixins: [tagListMixin],
  props: {
    type: {
      type: String,
      default: 'article'
    }
  },
  components: {
    tableComponent, seeButton, editButton, removeButton
  },
  created: function () {
    this.getTags(this.type)
  },
}
</script>
