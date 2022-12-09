export default {
  data() {
    return {
      category: {},
    }
  },
  created: function () {
    this.editCategory(this.$route.params.id)
  },
  methods: {
    editCategory: function (id) {
      this.$axios.$get('/api/category/edit/' + id)
        .then((data) => {
          this.category = data
        })
    },

  },
}
