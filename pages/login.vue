// pages/login.vue

<template>

  <div>
    <authComponent type="login">
      <template v-slot:auth-content>
        <!-- content for the auth-content slot -->
        <loginComponent @login="({ email, password }) => login(email, password)"></loginComponent>
      </template>
    </authComponent>
i
  </div>
</template>
<script>


import authComponent from '../components/auth/authComponent.vue'
import loginComponent from '../components/auth/login/loginComponent.vue'

export default {
  auth: 'guest',
  components: {
    authComponent,
    loginComponent
  },

}
</script>
