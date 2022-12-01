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
  layout: 'adminLayout',
  data() {
    return {
      user: this.$auth.user.data,
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

<style>
.vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;

  background: #44A4FC;
  border-left: 5px solid #187FE7;

}

.collaborator-enter-active,
.collaborator-leave-active {
  transition: opacity .3s;
}

.collaborator-enter,
.collaborator-leave-active {
  opacity: 0;
}
</style>
