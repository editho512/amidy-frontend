export default {
  data() {
    return {
      tagType: []
    }
  },
  methods: {
    getTagType() {
      return this.$axios.$get('/api/tag/get-type')
        .then((data) => {
          this.tagType = data
        })
    }
  },
  created() {
    this.getTagType()
  }
}
