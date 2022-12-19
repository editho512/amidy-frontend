export default {
  data() {
    return {
      product: {},
    }
  },
  created: function () {
    this.editProduct(this.$route.params.id)
  },
  methods: {
    editProduct: function (id) {
      this.$axios.$get('/api/product/edit/' + id)
        .then((data) => {
          this.product = data
        })
    },

  },
}
