<template>
  <div>
    <div class="mt-8">
      <div class="w-full">
        <label for="email" class="auth-label">EMAIL </label>

      </div>
      <div class="w-full mt-1">
        <input class="auth-input" type="text" placeholder="Type your first email" name="email" v-model="email" required autocomplete="off">

      </div>
    </div>
    <div class="mt-6">
      <div class="w-full">
        <label for="password" class="auth-label">PASSWORD </label>

      </div>
      <div class="w-full mt-1">
        <input class="auth-input" type="password" placeholder="Type your password" name="password" v-model="password"
          password-reveal required autocomplete="off">

      </div>

    </div>

    <div class="mt-8 flex">
      <div class="w-1/3">
        <button
          class="bg-primary rounded-full text-white py-1 px-4 transition ease-in-out delay-75 duration-200 hover:scale-125"
          @click="/*$emit('login', {email, password})*/ login()">Log in
        </button>
      </div>
      <div class="w-max">
        <button
          class="bg-third border-b-2 border-primary text-primary pb-1 transition ease-in-out delay-75 duration-200 hover:scale-125">Don't
          have any account
        </button>
      </div>
    </div>
    <div class="mt-12 flex ">
      <div class="w-max">
        <button class="bg-third border-b-2 border-gray-600  text-gray-600 pb-1 transition ease-in-out delay-75 duration-200 hover:scale-125">Forgot my password</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password : ''
    }
  },
  methods: {
    async login() {
      this.$store.commit("loginStore/email", this.email)
      this.$store.commit("loginStore/password", this.password)
      await this.$store.dispatch('loginStore/login').then((data) => {
        if (data.status == true) {
          //if grant
        }
      })
    }
  },

}
</script>
