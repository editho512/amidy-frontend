export default {
  data() {
    return {
      user: [],
    }
  },
  created: function () {
    this.editUser(this.$route.params.id)
  },
  methods: {
    editUser: function (id) {
      this.$axios.$get('/api/user/edit/' + id)
        .then((data) => {
          this.user = data
        })
    },

  },
}
