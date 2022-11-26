<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.collaborator') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('collaborator.list.title') }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <addButton @add="$router.push({ path: localePath('/collaborator/newCollaborator') })"></addButton>
          </div>

        </div>
      </template>
      <template #body-card>
        <listCollaboratorComponent></listCollaboratorComponent>

      </template>

    </cardComponent>

  </div>
</template>
<script>
import cardComponent from '../../components/widget/cardComponent.vue';
import addButton from '../../components/button/addButton.vue';
import listCollaboratorComponent from '../../components/collaborator/listCollaboratorComponent.vue';
export default {
  layout: 'adminLayout',
  components: {
    cardComponent,  addButton, listCollaboratorComponent
  },

}

</script>
