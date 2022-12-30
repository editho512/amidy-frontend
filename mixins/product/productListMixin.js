export default {
  data() {
    return {
      productList: [],
    }
  },
  methods: {
    getProducts: function (trigger = "onLoad") {
      let params = ""
      if (this.page != undefined) params = this.paginatedUrl()
      if (this.search != undefined) params += "&" + this.searchUrl()
      if (this.sortBy != undefined) params += "&" + this.sortUrl()

      if (trigger == "allLoad") params = ""

      this.$axios.$get('/api/product/' + params)
        .then((data) => {

          if (this.paginated === true) {
            this.productList = data.data
            this.paginate(data.options)
          }
          else this.productList = data

          if (trigger === 'onClick') this.$router.push({ path: this.localePath('/article/product/') + params })
        })
    },

  },
}
