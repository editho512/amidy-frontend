<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.collaborator') }}</h1>
    <cardComponent>
      <template #header-card>
              <h2 class="title-2">{{ $t('collaborator.list.title') }}</h2>

      </template>
      <template #body-card>
        <h2 class="title-2">{{ $t('collaborator.list.title') }}</h2>

      </template>

    </cardComponent>

  </div>
</template>
<script>
import cardComponent from '../../components/widget/cardComponent.vue';
export default {
  layout: 'adminLayout',
  components: {
    cardComponent
  }
}

</script>
