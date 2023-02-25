import gsap from 'gsap'


export default {
  app_logo_animate: ()=>{
    gsap.set(".app-logo", { opacity: 0 });
    gsap.to(".app-logo", { opacity: 1, duration: 1, delay: 1, ease: "ease-out" })
  }
}
