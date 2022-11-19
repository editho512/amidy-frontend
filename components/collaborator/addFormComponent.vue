<template>
  <div>
    <div class="grid grid-cols-3 ">
      <div class="col-span-1 max-lg:col-span-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-60 h-60 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

      </div>
      <div class="col-span-2 max-lg:col-span-3 pr-6 pl-2">
        <div class="grid grid-cols-6 mt-3">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="name" class="app-label">Name :</label>
          </div>
          <div class="col-span-5 max-md:col-span-6">
            <input type="text" name="name" placeholder="Tape the name" class="app-input">
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="lastname" class="app-label">Last name :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input type="text" name="lastname" placeholder="Tape the last name" class="app-input">
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4 ">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="email" class="app-label">Email :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input type="text" name="email" placeholder="Tape the email" class="app-input">
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="phone" class="app-label">Phone :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input type="text" name="phone" placeholder="Tape the phone" class="app-input">
          </div>
        </div>

        <div class="grid grid-cols-6 mt-4">
          <div class="col-span-1 max-lg:col-span-6">
            <label for="adresse" class="app-label">Adresse :</label>
          </div>
          <div class="col-span-5 max-lg:col-span-6">
            <input type="text" name="adresse" placeholder="Tape the adresse" class="app-input">
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script>

export default {

}
</script>
