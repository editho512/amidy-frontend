
<template>
  <div>
    <div class="mt-8">
      <div class="w-full">
        <label for="email" class="auth-label">NAME </label>

      </div>
      <div class="w-full mt-1">
        <input :class="['auth-input', errors.name != undefined ? 'input-auth-error' : '']" type="text"
          placeholder="Type your name" name="name" v-model="name" required autocomplete="off">

      </div>
      <p v-if="errors.name != undefined" class="text-red-700">{{ errors.name[0] }}</p>
    </div>
    <div class="mt-6">
      <div class="w-full">
        <label for="email" class="auth-label">EMAIL </label>

      </div>
      <div class="w-full mt-1">
        <input :class="['auth-input', errors.email != undefined ? 'input-auth-error' : '']" type="text"
          placeholder="Type your first email" name="email" v-model="email" required autocomplete="off">

      </div>
      <p v-if="errors.email != undefined" class="text-red-700">{{ errors.email[0] }}</p>

    </div>
    <div class="mt-6">
      <div class="w-full">
        <label for="password" class="auth-label">PASSWORD </label>

      </div>
      <div class="w-full mt-1">
        <input :class="['auth-input', errors.password != undefined ? 'input-auth-error' : '']" type="password"
          placeholder="Type your password" name="password" v-model="password" password-reveal required
          autocomplete="off">

      </div>
      <p v-if="errors.password != undefined" class="text-red-700">{{ errors.password[0] }}</p>

    </div>

    <div class="mt-6">
      <div class="w-full">
        <label for="password_confirmation" class="auth-label">CONFIRMATION </label>

      </div>
      <div class="w-full mt-1">
        <input class="auth-input" type="password" placeholder="Type your password" name="password_confirmation"
          v-model="password_confirmation" password-reveal required autocomplete="off">

      </div>

    </div>

    <div class="mt-8 flex">
      <div class="w-1/3">
        <button
          class="bg-primary rounded-full text-white py-1 px-4 transition ease-in-out delay-75 duration-200 hover:scale-125"
          @click="/*$emit('login', {email, password})*/ signup()">Sign up
        </button>
      </div>
      <div class="w-max">
        <button @click="$router.push({ path: localePath('/login') })"
          class="bg-third border-b-2 border-primary text-primary pb-1 transition ease-in-out delay-75 duration-200 hover:scale-125">Already
          have an account
        </button>
      </div>
    </div>
    <!-- <div class="mt-12 flex ">
      <div class="w-max">
        <button
          class="bg-third border-b-2 border-gray-600  text-gray-600 pb-1 transition ease-in-out delay-75 duration-200 hover:scale-125">Forgot
          my password</button>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    }
  },
  methods: {
    async signup() {
      this.$store.commit("userStore/email", this.email)
      this.$store.commit("userStore/password", this.password)
      this.$store.commit("userStore/name", this.password)
      this.$store.commit("userStore/password_confirmation", this.password_confirmation)

      await this.$store.dispatch('userStore/signup').then((data) => {
        if (data.status == true) {
          //if grant
          this.$router.push({ path: this.localePath('/login'), query: { status: 'signedup' } })
        } else {
          this.errors = data.errors.errors
        }
      })
    }
  },

}
</script>
