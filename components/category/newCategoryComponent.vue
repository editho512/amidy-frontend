<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="name" class="app-label">{{ $t('category.add.name') }} :</label>
          </div>
          <div class="col-span-3">
            <input type="text" name="name" :class="['app-input', errors.name != undefined ? 'app-input-error' : '']"
              @input="(e) => customVModel(e.target.name, e.target.value)" :value="category.name">
            <div class="app-input-error-message" v-if="errors.name != undefined">{{ errors.name[0] }}</div>

          </div>
        </div>
      </div>
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="type" class="app-label">{{ $t('category.add.type') }} :</label>
          </div>
          <div class="col-span-3">
            <select name="type" id="" @change="(e) => customVModel(e.target.name, e.target.value)"
              class="block w-full  p-2  text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary dark:focus:border-primary">
              <option v-for="(type, index) in categoryType" :key="index" :value="type" :selected="(type == category.type)">{{ type }}</option>
            </select>
            <div class="app-input-error-message" v-if="errors.type != undefined">{{ errors.type[0] }}</div>

          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-2 gap-2">
      <cancelButton @cancle="$router.push({ path: localePath('/article/category/') })"></cancelButton>
      <validateButton :loading="false" @validate="save"></validateButton>
    </div>
  </div>
</template>

<script>
import cancelButton from '../button/cancelButton.vue';
import validateButton from '../button/validateButton.vue';
import categoryTypeMixin from '../../mixins/category/categoryTypeMixin'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [categoryTypeMixin],
  components: {
    cancelButton, validateButton
  },

  data() {
    return {
      errors: {}
    }
  },

  props: {
    category: {
      type: Object,
      default() {
        return {
          type: 'article'
        }
      }
    },
  },

  methods: {
    ...mapMutations({
      setCategory: 'categoryStore/category'
    }),

    ...mapActions({
      addCategory: 'categoryStore/add',
      editCategory: 'categoryStore/edit'
    }),

    customVModel(field, value) {
      this.category[field] = value

      let category = { ...this.category }
      this.setCategory(category)
    },

    async save() {
      let url = window.location.href.split('/');

      if (url.filter(el => el === 'add').length > 0) {

        await this.addCategory().then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/category'), query: { action: 'added' } })
          else this.errors = res.errors
        })
      }
      else if (url.filter(el => el === 'edit') && this.category.id != undefined) {
        this.setCategory({...this.category})

        await this.editCategory(this.category.id).then((res) => {
          if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/category'), query: { action: 'updated' } })
          else this.errors = res.errors
        })
      }
    },
  },
}
</script>
