<template>
  <button :disabled="loading || disabled" class="mt-3 btn-success w-100" @click="$emit('validate')">
    <smallSpinner w="6" h="6" v-if="loading"></smallSpinner>
    <validateIcon v-else h="6" w="6"></validateIcon>
    <span class="pt-8">
      {{ $t('button.validate') }}
    </span>

  </button>
</template>

<script>
import validateIcon from '../icon/validateIcon.vue';
import smallSpinner from '../widget/smallSpinner.vue'
export default {
  components: {
    validateIcon, smallSpinner
  },
  props: {

    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

}
</script>
