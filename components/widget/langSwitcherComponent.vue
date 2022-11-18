<template>
  <div class="bg-gray-200 rounded-full p-1 flex justify-center gap-3">
    <nuxt-link  :key="$i18n.locales[1].code" :to="switchLocalePath($i18n.locales[1].code)">
      <button :class="['rounded-full p-1', $i18n.locales[1].code == $i18n.locale ? 'bg-gray-400' : '']">
        <img class="h-5" name="frenchFlag" src="../../assets/images/icon/la-france.png" />
      </button>
    </nuxt-link>
    <nuxt-link :key="$i18n.locales[0].code" :to="switchLocalePath($i18n.locales[0].code)">
    <button :class="['rounded-full p-1', $i18n.locales[0].code == $i18n.locale ? 'bg-gray-400' : '']">
      <img class="h-5" name="usaFlag" src="../../assets/images/icon/united-states.png" />
    </button>
    </nuxt-link>
  </div>

</template>
<script>

export default {

}
</script>
