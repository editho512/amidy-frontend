export default {
  data() {
    return {
      search: this.$route.query.search != undefined ? this.$route.query.search : ""
    }
  },
  methods: {
    searchUrl() {
      if (this.search === "") return "";
      return "search=" + this.search
    }
  },
}
