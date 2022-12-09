<template>
  <div class="px-3 py-6">
    <div class="grid grid-cols-2">
      <div class="col-span-1 max-lg:col-span-2 pl-4">
        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="phone" class="app-label">Phone:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input  type="text" name="phone" placeholder="Your phone"
              :class="['app-input', errors.phone != undefined ? 'app-input-error' : '']"
              :value="setting.phone"
              @input="(e) => customVModel(e.target.name, e.target.value)"
              :disabled="!editable"
              >
            <div class="app-input-error-message" v-if="errors.phone != undefined">{{ errors.phone[0] }}</div>
          </div>
        </div>
        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="email" class="app-label">Email:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input type="text" name="email" placeholder="Your email"
              :class="['app-input', errors.email != undefined ? 'app-input-error' : '']"
              :value="setting.email"
              :disabled="!editable"
              @input="(e) => customVModel(e.target.name, e.target.value)"
              >
            <div class="app-input-error-message" v-if="errors.email != undefined">{{ errors.email[0] }}</div>
          </div>
        </div>
      </div>
      <div class="col-span-1 max-lg:col-span-2 pl-4">
        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="currency" class="app-label">Currency:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input type="text" name="currency" placeholder="Your currency"
              :class="['app-input', errors.currency != undefined ? 'app-input-error' : '']"
              :value="setting.currency"
              :disabled="!editable"
              @input="(e) => customVModel(e.target.name, e.target.value)"
              >
            <div class="app-input-error-message" v-if="errors.currency != undefined">{{ errors.currency[0] }}</div>
          </div>
        </div>
        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="adresse" class="app-label">Adresse:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input type="text" name="adresse" placeholder="Your adresse"
              :class="['app-input', errors.adresse != undefined ? 'app-input-error' : '']"
              :value="setting.adresse"
              :disabled="!editable"
              @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.adresse != undefined">{{ errors.adresse[0] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    setting: {
      default() {
        return {}
      }
    },
    errors: {
      default() {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    editable() {
      return this.edit
    }
  },
  methods: {
    customVModel(field, value) {
      this.setting[field] = value

      this.getSetting({...this.setting})
    },
    ...mapMutations({
      getSetting: 'settingStore/setting'
    })
  }
}

</script>
