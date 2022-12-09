export default {
  data() {
    return {
      categoryList: [],
    }
  },
  methods: {
    getCategories: function (type = 'article') {
      this.$axios.$get('/api/category/' + type)
        .then((data) => {
          this.categoryList = data
        })
    },

  },
}
