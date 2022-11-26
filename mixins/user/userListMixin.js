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
    getUserList: function () {
      this.$axios.$get('/api/users/')
        .then((data) => {
          this.userList = data
        })
    },

  },
}
