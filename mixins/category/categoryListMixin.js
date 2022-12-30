export default {
  data() {
    return {
      categoryList: [],
    }
  },
  methods: {
    getCategories: function (trigger = "onLoad", type = 'article') {
      let params = ""
      if(this.page != undefined)    params = this.paginatedUrl()
      if(this.search != undefined)  params += "&" + this.searchUrl()

      if (trigger == "allLoad") params = ""

      this.$axios.$get('/api/category/' + type + "/" + params)
        .then((data) => {

          if (this.paginated === true) {
            this.categoryList = data.data
            this.paginate(data.options)
          }
          else this.categoryList = data

          if (trigger === 'onClick') this.$router.push({ path: this.localePath('/article/category/') + params })
        })
    },

  },
}
