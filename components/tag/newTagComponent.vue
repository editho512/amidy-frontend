<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="name" class="app-label">{{ $t('tag.add.name') }} :</label>
          </div>
          <div class="col-span-3">
            <input type="text"
            name="name"
            :class="['app-input', errors.name != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)"
            :value="tag.name"
            >
            <div class="app-input-error-message" v-if="errors.name != undefined">{{ errors.name[0] }}</div>

          </div>
        </div>
      </div>
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="type" class="app-label">{{ $t('tag.add.type') }} :</label>
          </div>
          <div class="col-span-3">
            <select name="type" id=""
             @change="(e) => customVModel(e.target.name, e.target.value)"
              class="block w-full  p-2  text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary dark:focus:border-primary">
              <option v-for="(type, index) in tagType"
              :key="index" :value="type"
              :selected="(type == tag.type)"
              >{{ type }}</option>
            </select>
            <div class="app-input-error-message" v-if="errors.type != undefined">{{ errors.type[0] }}</div>

          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-2 gap-2">
      <cancelButton @cancle="$router.push({ path: localePath('/article/tag/') })"></cancelButton>
      <validateButton :loading="false" @validate="save"></validateButton>
    </div>
  </div>
</template>

<script>
import cancelButton from '../button/cancelButton.vue';
import validateButton from '../button/validateButton.vue';
import tagTypeMixin from '../../mixins/tag/tagTypeMixin';

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [tagTypeMixin],
  components: {
    cancelButton, validateButton
  },

  data() {
    return {
      errors : {}
    }
  },

  props: {
    tag: {
      type: Object,
      default() {
        return {
          type : 'article'
        }
      }
    },
  },

  methods: {
    ...mapMutations({
      setTag : 'tagStore/tag'
    }),

    ...mapActions({
      addTag: 'tagStore/add',
      editTag: 'tagStore/edit'
    }),

    customVModel(field, value) {
      this.tag[field] = value

      let tag = { ...this.tag }
      this.setTag(tag)
    },

    async save() {
      let url = window.location.href.split('/');

      if (url.filter(el => el === 'add').length > 0) {

        await this.addTag().then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/tag'), query: { action: 'added' } })
          else this.errors = res.errors
        })
      }
      else if (url.filter(el => el === 'edit') && this.tag.id != undefined) {
        this.setTag({...this.tag})
        await this.editTag(this.tag.id).then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/tag'), query: { action: 'updated' } })
          else this.errors = res.errors
        })
      }
    },
  },
}
</script>
