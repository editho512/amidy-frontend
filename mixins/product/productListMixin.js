import { getObjectExceptKey } from '../../assets/js/helpers'


export default {
  data() {
    return {
      productList: [],
      request: []
    }
  },
  methods: {
    getProducts: function (trigger = "onLoad", url = '/article/product/') {
      let params = ""
      if (this.page != undefined) params = this.paginatedUrl()
      if (this.search != undefined) params += "&" + this.searchUrl()
      if (this.sortBy != undefined) params += "&" + this.sortUrl()
      if (this.request.length > 0) {
        this.request.forEach(element => {
          params += "&" + element

        });
      }
      if (trigger == "allLoad") params = ""

      this.$axios.$get('/api/product/' + params)
        .then((data) => {

          if (this.paginated === true) {
            this.productList = data.data
            this.paginate(data.options)
          }
          else this.productList = data

          if (trigger === 'onClick') this.$router.push({ path: this.localePath(url) + params })
        })
    },
    setRequest: function () {
      let params = getObjectExceptKey(this.$route.query, "page")
      params = getObjectExceptKey(params, "search")

      Object.keys(params).forEach((element, index) => {
          this.request.push(element + "=" + params[element] )
        //console.log("element", element, params[element])
      })

      //this.request = params
    }
  },
  created() {
    // let params = getObjectExceptKey(this.$route.query, "page")
    // params = getObjectExceptKey(params, "search")
    // this.request = params

  }
}
