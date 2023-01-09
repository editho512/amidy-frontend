export default {
  data() {
    return {
      tagList: [],
    }
  },

  methods: {
    getTags: function (trigger = "onLoad", type = 'article') {

      let params = ""

       if(this.page != undefined && trigger != 'All')    params = this.paginatedUrl()
      if(this.search != undefined && trigger != 'All')  params += "&" + this.searchUrl()


      if (trigger == "allLoad") params = ""

      this.$axios.$get('/api/tag/' + type + "/" + params)
        .then((data) => {

          if (this.paginated === true && trigger != 'All') {
            this.tagList = data.data
            this.paginate(data.options)
          }
          else this.tagList = data

          if (trigger === 'onClick') this.$router.push({ path: this.localePath('/article/tag/') + params })
        })
    },

  },
}
