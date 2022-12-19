<template>
  <button title="Remove attribut" class="text-red-400 w-100" v-on:click="$emit('remove')">
    <minusIcon h="6" w="6"></minusIcon>
  </button>
</template>

<script>
import minusIcon from '../icon/minusIcon.vue';
export default {
  components: {
    minusIcon
  }
}
</script>
