<template>
  <div class="font-Montserrat">
    <div class="home-navbar max-md:relative max-md:top-0 absolute w-full top-8 ">
      <sideBarCustomerComponent></sideBarCustomerComponent>
    </div>
    <div class="grid grid-cols-5 h-[80vh] max-lg:h-[100vh]">
      <div class="max-md:col-span-5 max-md:pt-0 col-span-2 pt-48 pl-2 pr-10 md:h-[30vh] max-xs:h-[60vh]">
        <h2 class="text-4xl font-bold text-center mb-8">The number one E-commerce platform</h2>
        <p class="max-md:text-center" id="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
          inventore
          officia
          reprehenderit voluptas
          possimus aliquam accusamus id, incidunt perferendis? Doloremque, eveniet. Cupiditate expedita quibusdam iste
          veniam accusantium earum repellat.</p>
      </div>
      <div
        class="home-first-image-container max-md:col-span-5 max-md:pt-16 max-md:pl-2 max-lg:pl-24  max-xl:pl-56 col-span-3 bg-primary h-full max-lg:rounded-none rounded-l-full max-xs:pl-16   pt-24 pl-96 relative max-lg:h-[100vh] max-md:h-[60vh]">
        <div class="relative">
          <img name="frenchFlag" class="home-first-image-1 z-30 absolute h-80 opacity-0"
            src="../assets/images/landing/asus-rog.png" />
          <img name="frenchFlag" class="home-first-image-2 z-20 absolute max-lg:left-48 left-56 h-28 rotate-45 opacity-0 "
            src="../assets/images/landing/panama.png" />
        </div>
        <h3
          class="max-md:bottom-[4%] font-Montserra text-center text-white z-40 absolute font-bold bottom-[20%] left-[10%] text-6xl  drop-shadow-2lg shadow-black max-md:hidden">
          <span v-for="(string, index) in welcome.split('')" v-index="index"
            :class="'opacity-0 home-first-welcome home-first-welcome-' + index">{{
              string
            }}</span>
        </h3>
        <div
          class="home-first-circle scale-0 max-md:hidden absolute -left-8 top-[42%] text-white bg-third rounded-full border-8 border-primaryLight h-16 w-16 flex justify-center items-center">
          <span class="font-graffiti">A</span>
        </div>
      </div>
    </div>

    <storePreviewComponent :products="products"></storePreviewComponent>
    <contactUsComponent></contactUsComponent>
    <footerComponent></footerComponent>

  </div>
</template>
<script>
import sideBarCustomerComponent from '../components/layout/sideBarCustomerComponent.vue';
import homeAnimate from '../gsap/homeAnimate';
import storePreviewComponent from '../components/home/storePreviewComponent.vue';
import contactUsComponent from '../components/home/contactUsComponent.vue';
import footerComponent from '../components/layout/footerComponent.vue';

export default {
  layout: 'customerLayout',
  components: { sideBarCustomerComponent, storePreviewComponent, contactUsComponent, footerComponent },
  data() {
    return {
      welcome: "WELCOME TO AMIDY!"
    }
  },
  async asyncData(context) {
    let response = await context.app.$axios.$get(`/api/product/preview-store`)
    return { products: response }
  },

  mounted() {
    // Animation for the first view of the page
    homeAnimate.first_view_iamge()
    homeAnimate.first_view_welcome("home-first-welcome", this.welcome.split('').length)

    // animate seconde section title
    homeAnimate.title_animate(this.$gsap, "home-second-title", "home-second")

    // animate the whole seconde section
    homeAnimate.preview_store_animate(this.$gsap, this.products)

    // animate seconde section title
    homeAnimate.title_animate(this.$gsap, "home-third-title", "home-third-form")

    // animate third section
    homeAnimate.contact_view_animate(this.$gsap, "home-third", "home-third-form", 5)
    // animate footer section
    homeAnimate.footer_view_animate(this.$gsap, "home-third", "app-footer",)

  }


}
</script>
