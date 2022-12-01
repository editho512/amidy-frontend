<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1">
      <div class="grid grid-cols-6 mt-4">
        <div class="col-span-2 max-lg:col-span-6">
          <label for="phone" class="app-label">Phone:</label>
        </div>
        <div class="col-span-4 max-lg:col-span-6">
          <input  type="text" name="phone" :placeholder="'Your phone'"
            :class="['app-input', errors.phone != undefined ? 'app-input-error' : '']">
          <div class="app-input-error-message" v-if="errors.phone != undefined">{{ errors.phone[0] }}</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'collaborator',
    mode: 'out-in'
  },
  layout: 'adminLayout',
  components: {
  },
  mounted() {
    if (this.$route.query.action != undefined) {
      let action = this.$route.query.action
      let message = this.$t('collaborator.list.' + action)

      this.$notify({ type: 'success', text: message })
    }
  }

}
</script>
