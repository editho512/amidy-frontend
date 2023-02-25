export default {
  data() {
    return {
      orderList: [],
    }
  },
  created: function () {
  },
  methods: {
    getOrderList: function (trigger = 'onLoad', user_id = 0) {

      let params = ""
      if (this.page != undefined) params = this.paginatedUrl()
      if (this.search != undefined) params += "&" + this.searchUrl()
      if (this.sortBy != undefined) params += "&" + this.sortUrl()
      if (user_id != 0) params += "&user_id=" + user_id

      if(trigger == "allLoad") params = ""

      this.$axios.$get('/api/order/' + params)
          .then((data) => {
            if (this.paginated === true) {
              this.orderList = data.data
              this.paginate(data.options)
            }
            else this.orderList = data

            if (trigger === 'onClick') this.$router.push({ path: this.localePath('/order/') + params })
        })
    },

  },
}
