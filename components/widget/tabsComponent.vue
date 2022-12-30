<template>
  <div>

    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li class="mr-2"
        v-for="(option, key) in options" :key="key"
      >
        <button
          :class="[
            'inline-block p-4  rounded-t-lg ',
            key == activeKey ? 'bg-third text-primary hover:bg-gray-700' : ' bg-gray-50 text-gray-500 hover:bg-gray-200'
          ]"
          v-on:click="$emit('change', key)"
        >{{ option }}</button>
      </li>

    </ul>

  </div>
</template>
<script>

export default {
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    activeKey: {
      type: Number,
      default : 0
    }

  }
}

</script>
