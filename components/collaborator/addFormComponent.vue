<template>
  <div>

    <div class="grid grid-cols-3 ">
      <profilePhotoComponent :url="photoview === '' ? photo.url : photoview" @focusPhoto="focusPhoto"></profilePhotoComponent>
      <div class="col-span-2 max-lg:col-span-3 pr-6 pl-2">
        <h3 class="title-3 py-2">{{ $t('collaborator.add.title_personal') }}</h3>
        <div class="grid grid-cols-6 mt-3">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="name" class="app-label">{{ $t('collaborator.add.label.name') }} :</label>
          </div>
          <div class="col-span-5 max-md:col-span-6">
            <input  :value="user.name" type="text" name="name"
            :placeholder="$t('collaborator.add.placeholder.name') "
            :class="['app-input', errors.name != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)"
            >
            <div class="app-input-error-message" v-if="errors.name != undefined">{{errors.name[0] }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="lastname" class="app-label">{{ $t('collaborator.add.label.firstname') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input :value="user.firstname" type="text" name="firstname"
            :placeholder="$t('collaborator.add.placeholder.firstname')"
            :class="['app-input', errors.firstname != undefined ? 'app-input-error' : '']"

            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.firstname != undefined">{{ errors.firstname[0] }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4 ">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="email" class="app-label">{{ $t('collaborator.add.label.email') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input :value="user.email" type="text" name="email"
            :placeholder="$t('collaborator.add.placeholder.email')"
            :class="['app-input', errors.email != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.email != undefined">{{ errors.email[0] }}</div>
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="phone" class="app-label">{{ $t('collaborator.add.label.phone') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input :value="user.phone" type="text" name="phone"
            :placeholder="$t('collaborator.add.placeholder.phone')"
            :class="['app-input', errors.phone != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.phone != undefined">{{ errors.phone[0] }}</div>

          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="adresse" class="app-label">{{ $t('collaborator.add.label.adresse') }} :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input :value="user.adresse" type="text"  name="adresse"
            :placeholder="$t('collaborator.add.placeholder.adresse')"
            :class="['app-input', errors.adresse != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.adresse != undefined">{{ errors.adresse[0] }}</div>

          </div>
        </div>

        <div class="hidden" >
          <div class="">
            <input  type="file" ref="photo" name="photo" @change="setPhoto">
          </div>
        </div>

      </div>

    </div>
    <div class="grid grid-cols-2 mt-6 pt-4 ">
      <div class="col-span-1 p-1 mt-4 max-lg:col-span-2">
        <h3 class="title-3 py-2">{{ $t('collaborator.add.title_security') }}</h3>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="password" class="app-label">{{ $t('collaborator.add.label.password') }}:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input :value="user.password" type="password" name="password"
            :placeholder="'Your password'"
            :class="['app-input', errors.password != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.password != undefined">{{ errors.password[0] }}</div>

          </div>
        </div>
        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-2 max-lg:col-span-6">
            <label for="confirmation" class="app-label">{{ $t('collaborator.add.label.confirmation') }}:</label>
          </div>
          <div class="col-span-4 max-lg:col-span-6">
            <input :value="user.confirme" type="password" name="password_confirmation"
            :placeholder="$t('collaborator.add.placeholder.confirmation')"
            :class="['app-input', errors.confirme != undefined ? 'app-input-error' : '']"
            @input="(e) => customVModel(e.target.name, e.target.value)">
            <div class="app-input-error-message" v-if="errors.confirme != undefined">{{ errors.confirme[0] }}</div>

          </div>
        </div>
      </div>
      <div class="col-span-1 p-1 mt-4 max-lg:col-span-2">
        <h3 class="title-3 py-2">{{ $t('collaborator.add.title_access') }}</h3>
          <div class="mt-4 px-2">
            <div v-if="userType.length > 0" class="grid grid-cols-3">
              <div class="col-span-1 max-lg:col-span-6">
                <label for="small" class="app-label">{{ $t('collaborator.add.label.user_type') }}</label>
              </div>
              <div class="col-span-2 max-lg:col-span-6">
                <select id="small"  @change="(e) => customVModel(e.target.name, e.target.value)" name="type"
                  class="block w-full p-2 mb-6 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="(type, index) in userType" :key="index" :value="type" :selected="type == typeDefault">{{ type }}</option>
                </select>
                <div class="app-input-error-message" v-if="errors.type != undefined">{{ errors.type[0] }}</div>

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
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [userTypeMixin],

  components: {
    profilePhotoComponent
  },

  props: {

    errors: {
      default: []
    },

    typeDefault: {
      default: 'Administrator'
    },

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

  data() {
    return {
      photoview: '',
    }
  },

  methods: {
    focusPhoto() {
      this.$refs.photo.click()
    },

    setPhoto(e) {

      this.photoview = URL.createObjectURL(e.target.files[0])

      this.user['photo'] = e.target.files[0]

      this.setCollaborator({ ...this.user })
    },

    customVModel(field, value) {
      this.user[field] = value

      let updatedUser = { ...this.user }

      if (this.photoview == '') delete updatedUser.photo;

      this.setCollaborator(updatedUser)
    },

    ...mapMutations({
      setCollaborator : 'userStore/collaborator'
    }),

  },

  created() {
    this.user['type'] = this.typeDefault
    this.setCollaborator(this.user)

  },

}
</script>
