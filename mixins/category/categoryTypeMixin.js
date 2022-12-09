export default {
  data() {
    return {
      categoryType: []
    }
  },
  methods: {
    getCategoryType() {
      return this.$axios.$get('/api/category/get-type')
        .then((data) => {
          this.categoryType = data
        })
    }
  },
  created() {
    this.getCategoryType()
  }
}
