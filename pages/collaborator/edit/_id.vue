<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.collaborator') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('collaborator.edit.title', { name: user.name + ' ' + user.firstname }) }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <backIcon @back="$router.push({ path: localePath('/collaborator/') })"></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <addFormComponent :errors="errors"
          :user="user"
          :type-default="user.type"
          :photo="{ file: null, url: (user.photo) ? $axios.defaults.baseURL + '/uploads/user/' + user.photo : null  }"
          >
        </addFormComponent>

      </template>
      <template #footer-card>
        <div class="flex justify-end pr-2 gap-2">
          <cancelButton @cancle="$router.push({ path: localePath('/collaborator/') })"></cancelButton>
          <validateButton :disabled="editCollaborator.length === 0"  :loading="false" @validate="update"></validateButton>
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
import userEditMixin from '../../../mixins/user/userEditMixin';

export default {
  layout: 'adminLayout',
  mixins: [userEditMixin],
  name: 'index',
  data() {
    return { validate: false, errors: [] }
  },
  components: {
    cardComponent, backIcon, addFormComponent, cancelButton, validateButton
  },
  methods: {
    async update() {
      if (this.editCollaborator.length === 0) return false

      await this.updateCollaborator(this.user.id).then((res) => {
        if (res.errors === undefined) this.$router.push({ path: this.localePath('/collaborator'), query: { action: 'updated' } })
         else this.errors = res.errors
      })
    },
    ...mapActions({
      'updateCollaborator': 'userStore/updateCollaborator'
    })
  },
  computed: {
    ...mapGetters({
      userType: 'userStore/getUserType',
      editCollaborator: 'userStore/getEditUser'
    })
  },

}

</script>
