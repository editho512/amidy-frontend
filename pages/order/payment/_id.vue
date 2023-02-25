<template>
  <div class="mt-8 bg-gray-100 rounded-lg m-2">
    <orderShowSkeleton v-if="Object.keys(order).length == 0"></orderShowSkeleton>
    <div v-else class="grid grid-cols-8  p-4">
      <div class="col-span-4 max-3lg:col-span-5 max-lg:col-span-8 mx-1">
        <div class="grid grid-cols-2 w-full">
          <div class="col-span-1">
            <div class="my-2  p-2 w-full rounded-md bg-white ">
              <h1 class="text-gray-600 font-bold text-2xl">{{ order.reference }}</h1>
              <p class="text-gray-400 font-extralight text-xs">{{ order.created_at }}</p>
            </div>

          </div>
          <div class="col-span-1 ">
            <div class="flex justify-center	pt-4 pb-6 border-b border-gray-500">
              <p class="text-gray-500 font-extralight text-2xl ">{{ order.status_full.toUpperCase() }}</p>
            </div>
          </div>

        </div>
        <orderShowComponent :order="order"></orderShowComponent>
      </div>

      <div class="col-span-4 max-3lg:col-span-3 max-lg:col-span-8 ">
        <div class="min-h-[60vh] max-md:min-h-[30vh] bg-white p-4 rounded-md ">
          <paymentMethodListComponent :hide="hidePaymentMethods" v-if="parseInt(order.status) !== 2">
          </paymentMethodListComponent>
          <div class="my-4" v-if="paymentMethod == 1">
            <stripeComponent @valide="(data) => valideCreditCard = data">
            </stripeComponent>
          </div>
          <div class="mt-2"
            v-if="parseInt(order.status) > 0 && parseInt(order.status) != 3 && $auth.user.type != 'Customer'">
            <button v-on:click="deliver(order)"
              class="border border-gray-300 p-1 rounded-md mt-2  px-2 py-4 w-full hover:bg-gray-100 text-gray-600">Deliver
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-2 pb-2 gap-2">
      <validateButton
        :disabled="(parseInt(order.status) > 0 && paymentMethod == 0) || (paymentMethod == 1 && !valideCreditCard) || loading"
        :loading="false" @validate="beforePay(order)"></validateButton>
    </div>
  </div>
</template>
<script>
import orderEditMixin from '../../../mixins/order/orderEditMixin';
import orderShowComponent from '../../../components/order/orderShowComponent.vue'
import paymentMethodListComponent from '../../../components/payment/paymentMethodListComponent.vue';
import validateButton from '../../../components/button/validateButton.vue';
import orderShowSkeleton from '../../../components/order/orderShowSkeleton.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex'

import stripeComponent from '../../../components/payment/stripeComponent.vue';
export default {
  layout(context) {
    let type = context.store.state.auth.user.type
    return type == "Customer" ? 'storeLayout' : 'adminLayout'
  },
  components: { orderShowComponent, paymentMethodListComponent, validateButton, stripeComponent, orderShowSkeleton },
  mixins: [orderEditMixin],
  computed: {
    ...mapGetters({
      paymentMethod: 'orderStore/getPaymentMethod',
    }),
    hidePaymentMethods() {
      let hidden = []
      if (parseInt(this.order.status) === 1) hidden = [...hidden, "Pay on delivery"]

      if (parseInt(this.order.status) > 1 && $auth.user.type != 'Customer') hidden = [...hidden, "Credit card"]

      return hidden
    }
  },
  data() {
    return {
      valideCreditCard: false,
      loading: false
    }
  },
  methods: {
    ...mapActions({
      pay: 'orderStore/setPayment',
      deliver: 'orderStore/setDelivery'
    }),
    async beforePay(order) {
      this.loading = true
      await this.pay(order).then(() => {
        this.loading = false
      })
    }
  },

}
</script>
