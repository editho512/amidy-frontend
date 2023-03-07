import gsap from 'gsap'

export default {
  first_view_iamge: () => {
    let home_first_image = gsap.timeline();

    gsap.set(".home-first-image-1 , .home-first-image-2  ", {
      opacity: 0, x: window.innerWidth,
    })
    gsap.set(".home-first-image-container", { backgroundColor: "#ffffff" })
    gsap.set(".home-first-circle", { scale: 0 })

    home_first_image.to(".home-first-image-container", { duration: 1, backgroundColor: "#40916c" })
    home_first_image.to(".home-first-image-1", { opacity: 1, x: 0, duration: 0.6, ease: "ease-out" }, 0.25)
    home_first_image.to(".home-first-image-2", { opacity: 1, x: 0, duration: 0.7, ease: "ease-out" }, 0.5)
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
  },
  preview_store_animate: (myGsap, data) => {
    let home_seconde = myGsap.timeline({
      scrollTrigger: {
        trigger: '.home-second-store',
      }
    })


    for (let index = 0; index < data.length; index++) {
      myGsap.set(".home-second-product-" + index, {
        x: window.innerWidth,
      })

    }

    for (let index = 0; index < data.length; index++) {
      home_seconde.to(".home-second-product-" + index, {
        x: 0,

      });

    }
  },
  title_animate: (myGsap, title_class, scroll_trigger_class ) =>{
    let home_seconde_title = scroll_trigger_class == undefined ? myGsap.timeline()
    : myGsap.timeline({
      scrollTrigger: {
        trigger: '.' + scroll_trigger_class,
      }
    })

   myGsap.set("." + title_class, {
      opacity: 0, color: "#ffff", borderBottomWidth: 0, borderColor: "#ffff"
    })


    home_seconde_title.to("." + title_class, {
      opacity: 1, color: "#40916c", borderColor: "#40916c", duration: 1,
    })

    home_seconde_title.to("." + title_class, {
      borderBottomWidth: 2, duration: 0.5, ease: "elastic.out(2, 0.5)"
    })
  },
  contact_view_animate(myGsap, triggerClass, elementClass, elementLength) {
    let contact = myGsap.timeline({delay:1 , scrollTrigger: {
        trigger: '.' + triggerClass,
      }})

    for (let index = 0; index < elementLength; index++) {
      gsap.set("." + elementClass + "-" + index , {
        opacity: 0, scale: 0.6
      })
     }

     for (let index = 0; index < elementLength; index++) {
       contact.to("." + elementClass + "-" + index, { opacity: 1 , scale: 1, duration: 0.6, ease: "elastic.out(1.5, 0.5)"})
     }
  },
  footer_view_animate(myGsap, triggerClass, elementClass, ) {
    let footer = myGsap.timeline({delay:1 , scrollTrigger: {
        trigger: '.' + triggerClass,
      }})

    gsap.set("." + elementClass , {
      opacity: 0,
    })

    footer.to("." + elementClass, { opacity: 1 , duration: 0.6})

  }

}
