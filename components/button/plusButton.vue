<template>
  <button title="Add More attributs" class="text-primary w-100" v-on:click="$emit('create')">
    <plusIcon h="6" w="6"></plusIcon>
  </button>
</template>

<script>
import addIcon from '../../components/icon/addIcon.vue';
import plusIcon from '../icon/plusIcon.vue';
export default {
  components: {
    plusIcon
  }
}
</script>
