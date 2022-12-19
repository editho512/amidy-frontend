<template>
  <div>
    <div class="grid grid-cols-4">
      <div class="col-span-3">
        <div v-for="(attribut, key) in attributs" :key="key" class="flex">
          <input :class="['app-input', ( errors[key] != undefined && errors[key].name)  ? 'app-input-error': '']" type="text" v-model="attribut.name" @input="validate">
          <input :class="['app-input', ( errors[key] != undefined && errors[key].value)  ? 'app-input-error': '']" type="text" v-model="attribut.value" @input="validate">
          <plusButton v-if="key === 0" @create="plus"></plusButton>
          <minusButton v-else @remove="minus(key)"></minusButton>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import plusButton from '../button/plusButton.vue';
import minusButton from '../button/minusButton.vue';

let time = null
export default {
  components: {
    plusButton, minusButton
  },
  props: {
    myAttributs: {
      type: Array,
      default() {
        return [{ name: '', value : ''}]
      }
    },
    myErrors: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      attributs: [...this.myAttributs],
      errors : []
    }
  },
  watch: {
    myErrors: function (newError, oldError) {
      this.errors = this.myErrors;
    }
  },
  methods: {

    plus() {
      this.attributs = [...this.attributs, { name: '', value: '' }]
    },
    minus(key) {
      this.attributs = this.attributs.filter((el, i) => i !== key)
      this.errors = this.errors.filter((el, i) => i !== key)

      this.$emit('attributs', JSON.stringify(this.attributs))
    },
    validate() {
      clearTimeout(time)

      time = setTimeout(() => {

        this.attributs = this.attributs.filter((el) => el.name !== '' || el.value !== '')
        if (this.attributs.length > 0) {
            this.$emit('attributs', JSON.stringify(this.attributs))
        }
      }, 300)
    }
  }
}

</script>
