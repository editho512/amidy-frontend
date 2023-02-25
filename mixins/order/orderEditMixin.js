export default {
  data() {
    return {
      order: [],
    }
  },
  created: function () {
    this.editOrder(this.$route.params.id)

  },
  methods: {
    editOrder: function (id) {
      this.$axios.$get('/api/order/edit/' + id)
        .then((data) => {
          this.order = data
        })
    },

  },
}
