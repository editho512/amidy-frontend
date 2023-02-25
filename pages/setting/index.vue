<template>
  <div>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('setting.title') }}</h2>
          </div>
          <div class="col-span-1 max-md:col-span-5 text-right pr-2">
            <editButton v-if="!edit" @edit="edit = true"></editButton>
          </div>

        </div>
      </template>
      <template #body-card>
        <generalFormComponent :errors="errors" :setting="settings" :edit="edit"></generalFormComponent>
      </template>
      <template #footer-card>
        <div class="flex justify-end pr-2 gap-2">
          <cancelButton v-if="edit" @cancle="reset"></cancelButton>
          <validateButton @validate="validate" :disabled="!edit"></validateButton>
        </div>
      </template>
    </cardComponent>

  </div>
</template>

<script>
import cardComponent from '../../components/widget/cardComponent.vue';
import generalFormComponent from '../../components/setting/generalFormComponent.vue';
import validateButton from '../../components/button/validateButton.vue';
import editButton from '../../components/button/editButton.vue';
import cancelButton from '../../components/button/cancelButton.vue';
import settingMixin from '../../mixins/setting/settingMixin'

import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: ['auth'],

  mixins: [settingMixin],
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  layout: 'adminLayout',
  components: {
    generalFormComponent, cardComponent, validateButton, editButton, cancelButton
  },
  data() {
    return {
      errors: [],
      edit: false
    }
  },
  computed: {
    ...mapGetters({
      setting: 'settingStore/getSetting'
    })
  },
  methods: {
    reset() {
      this.edit = false
      this.errors = {}
    },
    notify() {
      let message = "The setting is updated"
      this.$notify({ type: 'success', text: message })
    },
    ...mapActions({
      validateSetting: 'settingStore/updateSetting'
    }),
    async validate() {
      await this.validateSetting().then((res) => {
        if (res.errors === undefined) {
          this.notify()
          this.reset()
        }
        else this.errors = res.errors
      })
    }
  },


}
</script>

<style scoped>
.collaborator-enter-active,
.collaborator-leave-active {
  transition: opacity .3s;
}

.collaborator-enter,
.collaborator-leave-active {
  opacity: 0;
}
</style>
