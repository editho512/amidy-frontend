<template>
  <div>
    <h1 class="title-1">{{ $t('sidebar.tag') }}</h1>
    <cardComponent>
      <template #header-card>
        <div class="grid grid-cols-5 ">
          <div class="col-span-4 max-md:col-span-5">
            <h2 class="title-2">{{ $t('tag.edit.title', {name: tag.name}) }}</h2>
          </div>
          <div class="col-span-1  flex justify-end pr-2 max-sm:col-span-5 ">
            <backIcon @back="$router.push({ path: localePath('/article/tag') })"></backIcon>
          </div>

        </div>
      </template>
      <template #body-card>
        <newTagComponent :tag="tag"></newTagComponent>
      </template>
      <template #footer-card>
        <!-- <div class="flex justify-end pr-2 gap-2">
          <cancelButton @cancle="$router.push({ path: localePath('/article/tag/') })"></cancelButton>
          <validateButton :loading="false" ></validateButton>
        </div> -->
      </template>

    </cardComponent>
  </div>
</template>
<script>
import cardComponent from '../../../../components/widget/cardComponent.vue';
import backIcon from '../../../../components/button/backButton.vue';
import newTagComponent from '../../../../components/tag/newTagComponent.vue';
import tagEditMixin from '../../../../mixins/tag/tagEditMixin';

export default {
  layout: 'adminLayout',
  mixins:[tagEditMixin],
  components: {
    cardComponent, backIcon, newTagComponent
  }
}

</script>
