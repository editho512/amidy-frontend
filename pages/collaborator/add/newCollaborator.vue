<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.collaborator') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('collaborator.add.title') }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <backIcon @back="$router.push({ path: localePath('/collaborator/') })"></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <addFormComponent :errors="errors"></addFormComponent>

      </template>
      <template #footer-card>
        <div class="flex justify-end pr-2 gap-2">
          <cancelButton @cancle="$router.push({ path: localePath('/collaborator/') })"></cancelButton>
          <validateButton :loading="false" @validate="save"></validateButton>
        </div>
      </template>

    </cardComponent>
  </div>
</template>
<script>

import cardComponent from '../../../components/widget/cardComponent.vue';
import backIcon from '../../../components/button/backButton.vue';
import addFormComponent from '../../../components/collaborator/addFormComponent.vue';
import cancelButton from '../../../components/button/cancelButton.vue';
import validateButton from '../../../components/button/validateButton.vue';

import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['auth'],

  layout: 'adminLayout',
  data() {
    return { validate: false, errors: [] }
  },
  components: {
    cardComponent, backIcon, addFormComponent, cancelButton, validateButton
  },
  methods: {
    async save() {
      await this.addCollaborator().then((res) => {
        if (res.errors === undefined) this.$router.push({ path: this.localePath('/collaborator'), query: { action: 'added' } })
        else this.errors = res.errors
      })
    },
    ...mapActions({
      'addCollaborator': 'userStore/addCollaborator'
    })
  },
  computed: {
    ...mapGetters({
      userType: 'userStore/getUserType'
    })
  },

}

</script>
