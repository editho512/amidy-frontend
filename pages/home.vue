<template>
  <div class="font-Montserrat">
    <div class="max-md:relative max-md:top-0 absolute w-screen top-8 ">
      <sideBarCustomerComponent></sideBarCustomerComponent>
    </div>
    <div class="grid grid-cols-5 h-[80vh] ">
      <div class="max-md:col-span-5 max-md:pt-0 col-span-2 pt-64 max-md:h-[30vh]">
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim inventore officia
          reprehenderit voluptas
          possimus aliquam accusamus id, incidunt perferendis? Doloremque, eveniet. Cupiditate expedita quibusdam iste
          veniam accusantium earum repellat.</p>
      </div>
      <div
        class="max-md:col-span-5 max-md:pt-16 max-md:pl-2 max-lg:pl-24  max-xl:pl-56 col-span-3 bg-primary h-full max-lg:rounded-none rounded-l-full max-xs:pl-16   pt-24 pl-96 relative max-lg:h-[100vh] max-md:h-[60vh]">
        <div class="relative">
          <img name="frenchFlag" class="z-30 absolute h-80 " src="../assets/images/landing/asus-rog.png" />
          <img name="frenchFlag" class="z-20 absolute max-lg:left-48 left-56 h-28 rotate-45 "
            src="../assets/images/landing/panama.png" />

        </div>
        <div
          class="max-md:hidden absolute -left-8 top-[42%] text-white bg-third rounded-full border-8 border-primaryLight h-16 w-16 flex justify-center items-center">
          <span class="font-graffiti">A</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideBarCustomerComponent from '../components/layout/sideBarCustomerComponent.vue';


export default {
  layout: 'customerLayout',
  auth: 'guest',
  components: { sideBarCustomerComponent }

}
</script>
