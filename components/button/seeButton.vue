<template>
  <button class="btn-primary" @click="$emit('see')">
    <seeIcon></seeIcon>
  </button>
</template>
<script>

import seeIcon from '../icon/seeIcon.vue';

export default {
  components:{ seeIcon}
}
</script>
