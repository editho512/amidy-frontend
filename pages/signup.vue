// pages/login.vue

<template>
  <div class="">
    <div class="flex justify-center -mb-16 mt-2 ">
      <buttonGoogleAuthComponent></buttonGoogleAuthComponent>
    </div>
    <authComponent type="signup">
      <template v-slot:auth-content>
        <!-- content for the auth-content slot -->
        <signupComponent></signupComponent>
      </template>
    </authComponent>
    i
  </div>
</template>
<script>


import authComponent from '../components/auth/authComponent.vue'
import loginComponent from '../components/auth/login/loginComponent.vue'
import signupComponent from '../components/auth/signup/signupComponent.vue';
import buttonGoogleAuthComponent from '../components/auth/google/buttonGoogleAuthComponent.vue';

export default {
  middleware: ['auth'],
  auth: 'guest',
  layout: 'storeLayout',
  components: {
    authComponent,
    loginComponent,
    signupComponent,
    buttonGoogleAuthComponent
  },

}
</script>
