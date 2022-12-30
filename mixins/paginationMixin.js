export default {
  data() {
    return {
      paginated: true,
      page: this.$route.query.page != undefined ? this.$route.query.page : 1,
      totalPages: null,
      total: null,
      perPage: null,
      currentPage: null,
      hasMorePages: true
    }
  },
  methods: {
    paginatedUrl() {
      return '?page=' + this.page
    },
    paginate(options) {
      if (options.currentPage) this.currentPage = options.currentPage
      if (options.totalPages) this.totalPages = options.totalPages
      if(options.perPage) this.perPage = options.perPage
      if (options.total) this.total = options.total
    }
  },
}
