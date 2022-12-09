export default {
  data() {
    return {
      settings: {},
    }
  },
  created: function () {
    this.getSettings(this.$route.params.id)
  },
  methods: {
    getSettings: function () {
      this.$axios.$get('/api/setting')
        .then((data) => {
          this.settings = {...data}
        })
    },

  },
}
