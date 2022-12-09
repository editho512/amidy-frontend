<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="name" class="app-label">{{ $t('category.delete.name') }} :</label>
          </div>
          <div class="col-span-3">
            <div class="app-input">{{ category.name }}</div>

          </div>
        </div>
      </div>
      <div class="col-span-1 max-sm:col-span-2">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label for="type" class="app-label">{{ $t('category.delete.type') }} :</label>
          </div>
          <div class="col-span-3">
            <div class="app-input">{{ category.type }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pr-2 gap-2">
      <cancelButton @cancle="$router.push({ path: localePath('/article/category/') })"></cancelButton>
      <validateButton :loading="false" @validate="validate"></validateButton>
    </div>
  </div>
</template>

<script>
import cancelButton from '../button/cancelButton.vue';
import validateButton from '../button/validateButton.vue';
import categoryTypeMixin from '../../mixins/category/categoryTypeMixin';

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [categoryTypeMixin],
  components: {
    cancelButton, validateButton
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

    ...mapActions({
      deleteCategory: 'categoryStore/delete',
    }),

    async validate() {
      await this.deleteCategory(this.category.id).then((res) => {
        if (res.errors === undefined) this.$router.push({ path: this.localePath('/article/category'), query: { action: 'deleted' } })
        else this.errors = res.errors
      })

    },
  },
}
</script>
