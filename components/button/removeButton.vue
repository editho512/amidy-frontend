<template>

  <button class="btn-danger" @click="$emit('remove')">
    <removeIcon></removeIcon>
  </button>

</template>

<script>
import removeIcon from '../icon/removeIcon.vue';

export default {
  components: {
    removeIcon
  }
}
</script>
