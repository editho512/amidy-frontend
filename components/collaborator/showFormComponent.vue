<template>
  <div>

    <div class="grid grid-cols-3 ">
      <profilePhotoComponent :url="photo.url"  :static="true">
      </profilePhotoComponent>
      <div class="col-span-2 max-lg:col-span-3 pr-6 pl-2">
        <h3 class="title-3 py-2">{{ $t('collaborator.add.title_personal') }}</h3>
        <div class="grid grid-cols-6 mt-3">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="name" class="app-label">{{ $t('collaborator.add.label.name') }} :</label>
          </div>
          <div class="col-span-5 max-md:col-span-6">
            <div class="app-input">{{ user.name }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="lastname" class="app-label">{{ $t('collaborator.add.label.firstname') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <div class="app-input">{{ user.firstname }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4 ">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="email" class="app-label">{{ $t('collaborator.add.label.email') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <div class="app-input">{{ user.email }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="phone" class="app-label">{{ $t('collaborator.add.label.phone') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <div class="app-input">{{ user.phone }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="adresse" class="app-label">{{ $t('collaborator.add.label.adresse') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <div class="app-input">{{ user.adresse }}</div>
          </div>
        </div>
      </div>

    </div>
    <div class="grid grid-cols-1 mt-6 pt-4 ">
      <div class="col-span-1 p-1 mt-4 max-lg:col-span-2">
        <h3 class="title-3 py-2">{{ $t('collaborator.add.title_access') }}</h3>
        <div class="mt-4 px-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 max-lg:col-span-6">
              <label for="small" class="app-label">{{ $t('collaborator.add.label.user_type') }}</label>
            </div>
            <div class="col-span-2 max-lg:col-span-6">
              <div class="app-input">{{ user.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import profilePhotoComponent from '../imageContainer/profilePhotoComponent.vue'

import userTypeMixin from "../../mixins/user/userTypeMixin";

export default {
  mixins: [userTypeMixin],

  components: {
    profilePhotoComponent
  },

  props: {

    user: {
      default() {
        return {}
      }
    },

    photo: {
      default() {
        return {
          file: null,
          url: null
        }
      }
    }

  },

}
</script>
