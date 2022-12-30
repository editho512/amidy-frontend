export default {
  data() {
    return {
      userList: [],
    }
  },
  created: function () {
    this.getUserList()
  },
  methods: {
    getUserList: function (trigger = 'onLoad') {

      let params = ""
      if (this.page != undefined) params = this.paginatedUrl()
      if (this.search != undefined) params += "&" + this.searchUrl()
      if (this.sortBy != undefined) params += "&" + this.sortUrl()

      if(trigger == "allLoad") params = ""

      this.$axios.$get('/api/users/' + params)
          .then((data) => {
            if (this.paginated === true) {
              this.userList = data.data
              this.paginate(data.options)
            }
            else this.userList = data

            if (trigger === 'onClick') this.$router.push({ path: this.localePath('/collaborator/') + params })
        })
    },

  },
}
