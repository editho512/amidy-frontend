export default {
  data() {
    return {
      productList: [],
    }
  },
  methods: {
    getProducts: function () {
      this.$axios.$get('/api/product/')
        .then((data) => {
          this.productList = data
        })
    },

  },
}
