<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Dashboard</h1>

      <p>Hi {{ user.name }}</p>

      <a href="#" @click.prevent="logout">Logout</a>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],

  layout: 'adminLayout',
  data() {
    return {
      user: this.$auth.user,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()

      this.$router.push('/login')
    },
  },

}
</script>


