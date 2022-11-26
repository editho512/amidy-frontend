<template>
  <button class="btn-secondary" @click="$emit('edit')">
    <editIcon></editIcon>
  </button>
</template>
<script>
import editIcon from '../icon/editIcon.vue';

export default {
  components: {
    editIcon
  }
}
</script>
