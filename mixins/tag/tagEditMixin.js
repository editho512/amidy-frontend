export default {
  data() {
    return {
      tag: {},
    }
  },
  created: function () {
    this.editTag(this.$route.params.id)
  },
  methods: {
    editTag: function (id) {
      this.$axios.$get('/api/tag/edit/' + id)
        .then((data) => {
          this.tag = data
        })
    },

  },
}
