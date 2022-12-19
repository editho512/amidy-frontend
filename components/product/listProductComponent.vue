<template>
  <tableComponent>
    <template #table-header>
      <tr>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-max">
          Reference
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5">
          Name
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5">
          Stock
        </th>
        <th scope="col" class="text-lg  text-primary font-extrabold px-6 py-4 text-left w-1/5">
          Actions
        </th>
      </tr>
    </template>
    <template #table-body>

      <tr v-for="(product, key) in productList" :key="key">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ product.reference }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">--</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <seeButton @see="$router.push({ path: localePath('/article/product/show/' + product.id) })"></seeButton>
          <editButton @edit="$router.push({ path: localePath('/article/product/edit/' + product.id) })"></editButton>
          <removeButton @remove="$router.push({ path: localePath('/article/product/delete/' + product.id) })"></removeButton>
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
import productListMixin from '../../mixins/product/productListMixin'

export default {
  mixins: [productListMixin],

  components: {
    tableComponent, seeButton, editButton, removeButton
  },
  created: function () {
    this.getProducts()
  },
}
</script>
