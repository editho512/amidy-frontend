<template>
  <cardComponent>
    <template #header-card>
      <div class="grid grid-cols-5 ">
        <div class="col-span-4 max-md:col-span-5">
          <h2 class="title-2">The liste of the title</h2>
        </div>

      </div>
    </template>
    <template #body-card>
      <orderListComponent></orderListComponent>

    </template>

  </cardComponent>
</template>
<script>
import orderListComponent from '../../components/order/orderListComponent.vue';
import cardComponent from '../../components/widget/cardComponent.vue';
export default {
  middleware: ['auth'],
  layout(context) {
    let type = context.store.state.auth.user.type
    return type == "Customer" ? 'storeLayout' : 'adminLayout'
  },
  components: {
    orderListComponent, cardComponent
  }
}
</script>
