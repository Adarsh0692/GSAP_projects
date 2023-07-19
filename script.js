let tl = gsap.timeline()
tl.from(".nav img, h3, button", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger:0.2,
})

tl.from(".home h1" ,{
    y: 100,
    opacity: 0,
    stagger: 0.3,
})

tl.from(".home img",{
      scale:0,
      opacity:0 ,
      stagger: 0.4,
      
} )

tl.from("h4" ,{
    scale: 0,
    opacity: 0
})

tl.to("h4", {
    y: 20,
    repeat: -1,
    duration: 0.8,
    yoyo: true
})
    