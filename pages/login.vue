// pages/login.vue

<template>
  <div>
    <div class="flex justify-center -mb-16 mt-2 ">
      <buttonGoogleAuthComponent></buttonGoogleAuthComponent>
    </div>
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
import buttonGoogleAuthComponent from '../components/auth/google/buttonGoogleAuthComponent.vue';

export default {
  middleware: ['auth'],
  auth: 'guest',
  layout: 'storeLayout',
  components: {
    authComponent,
    loginComponent,
    buttonGoogleAuthComponent
  },

}
</script>
