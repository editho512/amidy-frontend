<template>
  <div class="p-2 m-2 bg-gray-200 rounded-md">
    <div class="grid grid-cols-6 mt-2">
      <div class="col-span-4 max-2xl:col-span-6 px-1 ">
        <div class="grid grid-cols-4 pt-2">
          <div class="col-span-1">
            <label for="number" class="text-gray-500">Number :</label>

          </div>
          <div class="col-span-3">
            <input type="text"
              :class="['border border-gray-300 w-full rounded-md outline-none h-8 ', errorCreditCard ? 'border-red-600 focus:border-red-500' : 'border-gray-300 focus:border-gray-400']"
              v-model="number" v-on:keyup="valide">
          </div>
        </div>
      </div>
      <div class="col-span-2 max-2xl:col-span-6 px-1">
        <div class="grid grid-cols-4 pt-2">
          <div class="col-span-1">
            <label for="cvv" class="text-gray-500">CVV :</label>

          </div>
          <div class="col-span-3">
            <input type="text"
              :class="['border border-gray-300 w-full rounded-md outline-none h-8 ', errorCreditCard ? 'border-red-600 focus:border-red-500' : 'border-gray-300 focus:border-gray-400']"
              v-model="cvv" v-on:keyup="valide">
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 mt-2 ">
      <div class="col-span-4 max-2xl:col-span-6 px-1 ">
        <p class="mt-4 mb-2 text-gray-500">Expiration date</p>
        <div class="grid grid-cols-4">
          <div class="col-span-1 max-sm:col-span-4 max-sm:pr-0 pr-1">
            <input type="text"
              :class="['border  w-full rounded-md outline-none font-extralight h-8  px-1', valideMonth ? 'border-gray-300 focus:border-gray-400' : 'border-red-500 focus:border-red-400']"
              v-on:keyup="valide" placeholder="1-12(month)" v-model="month">
          </div>
          <div class="col-span-3 max-sm:col-span-4">
            <input type="text"
              :class="['border  w-full rounded-md outline-none font-extralight h-8  px-1', valideYear ? 'border-gray-300 focus:border-gray-400' : 'border-red-500 focus:border-red-400']"
              v-on:keyup="valide" placeholder="<2022(year)" v-model="year">
          </div>
        </div>
      </div>
      <div class="col-span-2 max-2xl:col-span-6 px-1 max-2xl:mt-2 mt-12">
        <div class="flex justify-center items-center">
          <img class="w-32" alt="visa and master card icons" src="../../assets/images/icon/visa-logo-png-2028.png" />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { set } from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      month: 1,
      year: new Date().getFullYear(),
      number: '',
      cvv: ''
    }
  },
  computed: {
    valideMonth() {
      return parseInt(this.month) > 0 && parseInt(this.month) < 13
    },
    valideYear() {
      return parseInt(this.year) >= parseInt(new Date().getFullYear())
    },
    valideNumber() {
      return this.number != ''
    },
    valideCvv() {
      return this.cvv != ''
    },
    ...mapGetters({
      errorCreditCard: "orderStore/getErrorCreditCard"
    })
  },
  methods: {
    ...mapMutations({
      setCreditCard: 'orderStore/setCreditCard'
    }),
    valide() {
      this.$emit("valide", this.valideMonth && this.valideYear && this.valideNumber && this.valideCvv)

      if (this.valideMonth && this.valideYear && this.valideNumber && this.valideCvv) this.setCreditCard({ month: this.month, year: this.year, number: this.number, cvv: this.cvv })
    }
  }

};
</script>
