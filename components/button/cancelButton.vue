<template>
  <button class="mt-3 btn-danger w-100" v-on:click="$emit('cancle')">
    <cancelIcon h="6" w="6"></cancelIcon>
    <span class="pt-8">
      {{ $t('button.cancel') }}
    </span>

  </button>
</template>

<script>
import cancelIcon from '../icon/cancelIcon.vue';
export default {
  components: {
    cancelIcon
  }
}
</script>
