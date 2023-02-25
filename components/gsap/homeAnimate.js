import gsap from 'gsap'

export default {
  first_view_iamge: () => {
    let home_first_image = gsap.timeline();

    gsap.set(".home-first-image-1 , .home-first-image-2  ", {
      x: window.innerWidth,
    })
    gsap.set(".home-first-image-container", { backgroundColor: "#ffffff" })
    gsap.set(".home-first-circle", { scale: 0 })

    home_first_image.to(".home-first-image-container", { duration: 1, backgroundColor: "#40916c" })
    home_first_image.to(".home-first-image-1", { x: 0, duration: 0.6, ease: "ease-out" }, 0.25)
    home_first_image.to(".home-first-image-2", { x: 0, duration: 0.7, ease: "ease-out" }, 0.5)
    home_first_image.to(".home-first-circle", { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" })
  },
  first_view_welcome: (elementClass, elementLength) => {
    let welcome = gsap.timeline()
    // Animation for the first appear
    let welcome_first_appear = gsap.timeline();

     gsap.set("." + elementClass , {
       opacity: 0
     })

     for (let index = 0; index < elementLength; index++) {
       welcome_first_appear.to("." + elementClass + "-" + index, { opacity: 0.7 })
     }
    welcome_first_appear.duration(2);

    // Aniamiton that repeat in loop
    let welcome_loop = gsap.timeline({repeat: -1});
    gsap.set("." + elementClass , {
       fontSize : "3.75rem"
    })

    for (let index = 0; index < elementLength; index++) {
      welcome_loop.to("." + elementClass + "-" + index, { opacity: 1 , fontSize: "4.75rem", duration: 0.3, delay: 1, ease: "elastic.out(1.5, 0.5)"})
      welcome_loop.to("." + elementClass + "-" + index, { opacity: 0.7 , fontSize: "3.75rem", duration: 0.3, delay: 1, ease: "elastic.out(1.5, 0.5)" })

    }

    welcome.add(welcome_first_appear)
    welcome.add(welcome_loop)
    welcome.play()
  }

}
