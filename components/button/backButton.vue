<template>
  <button class="mt-3 btn-secondary w-100" v-on:click="$emit('add')">
    <backIcon h="6" w="6"></backIcon>
    <span class="pt-8">
      {{ $t('button.back') }}
    </span>

  </button>
</template>

<script>
import backIcon from '../../components/icon/backIcon.vue';

export default {
  components: {
    backIcon
  }
}
</script>
