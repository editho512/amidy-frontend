<template>
  <div class="mt-8 z-40">
    <div class="flex justify-center item-center ">
      <div class="max-xl:w-full max-xl:mx-2 w-1/2 h-100 drop-shadow-xl">
        <div class="flex rounded-full ">
          <div class="flex items-center bg-primary rounded-l-xl py-8 px-3 text-white w-1/2 max-sm:hidden">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime qui ipsum laboriosam, voluptatem
              perspiciatis quia, error quidem saepe unde dignissimos ea eveniet amet quaerat? Ipsum delectus modi rem
              consequatur repudiandae dicta porro ad veritatis aperiam. At, facere ea saepe, repudiandae error enim
              nesciunt illo dignissimos, voluptatem repellendus doloremque sunt.</p>
          </div>
          <div class="bg-third rounded-r-xl py-5 px-3 pl-8 w-1/2 max-sm:w-full max-sm:rounded-xl">
            <div class="mt-8 mb-4 text-xl text-gray-500">
              <button @click="$router.push({ path: localePath('/login') })"
                :class="['transition ease-in-out delay-75 duration-200 hover:scale-125', type == 'login' ? 'auth-header-btn-active' : '']">{{
                  $t('login.login')
                }}</button>
              <span class="mx-4">{{ $t('login.or') }}</span>
              <button @click="$router.push({ path: localePath('/signup') })"
                :class="['transition ease-in-out delay-75 duration-200 hover:scale-125', type == 'signup' ? 'auth-header-btn-active' : '']">{{
                  $t('login.signup')
                }}
              </button>
            </div>
            <slot name="auth-content"></slot>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
export default {

  props: {
    type: String,
  }
}
</script>
