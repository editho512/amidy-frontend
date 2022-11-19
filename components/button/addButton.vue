<template>
  <button class="mt-3 btn-success w-100" v-on:click="$emit('add')">
    <addIcon h="6" w="6"></addIcon>
    <span class="pt-8">
      {{$t('button.add')}}
    </span>

  </button>
</template>

<script>
import addIcon from '../../components/icon/addIcon.vue';

export default {
  components: {
    addIcon
  }
}
</script>
