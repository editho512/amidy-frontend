<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.collaborator') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('collaborator.add.title') }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 max-sm:justify-center">
            <backIcon></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <addFormComponent></addFormComponent>
      </template>

    </cardComponent>
  </div>
</template>
<script>

import cardComponent from '../../components/widget/cardComponent.vue';
import backIcon from '../../components/button/backButton.vue';
import addFormComponent from '../../components/collaborator/addFormComponent.vue';

export default {
  layout: 'adminLayout',
  components: {
    cardComponent, backIcon, addFormComponent
  }
}

</script>
