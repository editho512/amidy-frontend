export default {
  data() {
    return {
      categoryList: [],
    }
  },
  methods: {
    getCategories: function (trigger = "onLoad", type = 'article') {
      let params = ""
      if(this.page != undefined && trigger != 'All')    params = this.paginatedUrl()
      if(this.search != undefined && trigger != 'All')  params += "&" + this.searchUrl()

      if (trigger == "allLoad") params = ""

      this.$axios.$get('/api/category/' + type + "/" + params)
        .then((data) => {

          if (this.paginated === true && trigger != 'All') {
            this.categoryList = data.data
            this.paginate(data.options)
          }
          else this.categoryList = data

          if (trigger === 'onClick') this.$router.push({ path: this.localePath('/article/category/') + params })
        })
    },

  },
}
