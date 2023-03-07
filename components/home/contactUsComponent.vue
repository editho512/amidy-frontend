<template>
  <div class="h-[70vh] max-[400px]:h-[100vh] pt-4">
    <div class="home-third">
      <h3 class="text-center max-md:bottom-[4%] font-Montserra  text-primary font-bold  text-6xl ">
        <span class="opacity-0  home-third-title">
          Contact us
        </span>
      </h3>
    </div>
    <div class="flex justify-center mt-8">
      <div class="max-md:w-3/4 w-2/4 home-third-form flex flex-col justify-center">
        <input v-model="message.name" type="text" placeholder="Name"
          :class="['home-third-form-0 border border-primary rounded-xl p-3 outline-none  mb-4 opacity-0',
            (messageErrors.name != undefined) ? 'border-red-800 placeholder-red-800' : 'border-primary placeholder-primary']">
        <input v-model="message.email" type="text" placeholder="Email"
          :class="['home-third-form-1 border  rounded-xl p-3 outline-none  mb-4 opacity-0',
            (messageErrors.email != undefined) ? 'border-red-800 placeholder-red-800' : 'border-primary placeholder-primary']">
        <input v-model="message.object" type="text" placeholder="Object"
          :class="['home-third-form-2 border border-primary rounded-xl p-3 outline-none placeholder-primary mb-4 opacity-0',
            (messageErrors.object != undefined) ? 'border-red-800 placeholder-red-800' : 'border-primary placeholder-primary']">
        <textarea v-model="message.messages" name="message" id="" cols="10" rows="5" placeholder="Message"
          :class="['home-third-form-3 border border-primary rounded-xl p-3 outline-none placeholder-primary mb-4 opacity-0',
            (messageErrors.messages != undefined) ? 'border-red-800 placeholder-red-800' : 'border-primary placeholder-primary']"></textarea>
        <div class="flex justify-end">
          <button @click="contactUs"
            class="home-third-form-4 bg-primary rounded-full text-white px-8 py-2  opacity-0">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: {
        name: "",
        email: "",
        object: "",
        messages: ""
      },
      messageErrors: {}
    }
  },
  methods: {
    contactUs() {
      this.$axios.$post("/api/notification/contact-us", this.message).then(({ data }) => {
        // succes contacting
        this.messageErrors = []
        this.message = {
          name: "",
          email: "",
          object: "",
          messages: ""
        }

      }).catch(data => {
        console.log("errors", data.response.data.errors)
        this.messageErrors = data.response.data.errors
      })
    }
  }
}
</script>
