var tl = gsap.timeline()

// tl.from("#nav #logo", {
//     y:"-100%",
//     opacity:0,
//     duration:1,
//     delay:0.2,
// })

// tl.from("#nav a", {
//     y:"-100%",
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })

// tl.from("#nav button", {
//     y:"-100%",
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })

tl.from("#nav .gs", {
    y:"-100%",
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.1
})

gsap.from("#hero img", {
    scale:0.8,
    duration:1,
    delay:0.5,
    opacity:0
})

gsap.from("#text h3", {
    y:"100%",
    duration:1,
    delay:0.5,
    opacity:0
})

tl.from(".btn", {
    y: "0px", // Adjust the value as needed
    opacity: 0,
    duration: 0.5,
});
