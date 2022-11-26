export default {
  data() {
    return {
      userType : [],
    }
  },
  created: function () {
    this.getUserType()
  },
  methods: {
     getUserType: function () {
      this.$axios.$get('/api/user/user-type')
        .then((data) => {
          this.userType = data
        })
    },

  },
}
