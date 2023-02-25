<template>
  <div>

  </div>
</template>
<script>

export default {
  async created() {
    let data = this.$route.query
    await this.$auth.loginWith('local', { data: data })
  }
}
</script>
