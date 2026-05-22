// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Entrance Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    })
    .from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1
    }, "-=1");
});

// 2. Scroll Reveal for Text
gsap.from(".reveal-text", {
    scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".reveal-p", {
    scrollTrigger: {
        trigger: ".reveal-p",
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.2
});

// 3. Staggered Gallery Reveal
gsap.from(".grid-item", {
    scrollTrigger: {
        trigger: ".grid-container",
        start: "top 75%",
    },
    opacity: 0,
    scale: 0.9,
    y: 50,
    duration: 1,
    stagger: 0.2, // This creates the "one-by-one" appearance
    ease: "expo.out"
});









