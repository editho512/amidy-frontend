export default {
  data() {
    return {
      tagList: [],
    }
  },

  methods: {
    getTags: function (type = 'article') {
      this.$axios.$get('/api/tag/' + type)
        .then((data) => {
          this.tagList = data
        })
    },

  },
}
