export default {
  data() {
    return {
      sortBy: this.$route.query.sortBy != undefined ? JSON.parse(this.$route.query.sortBy) : {}
    }
  },
  methods: {
    sortUrl() {
      if(Object.keys(this.sortBy).length === 0) return ''
      return "sortBy=" + JSON.stringify(this.sortBy)
    }
  },
}
