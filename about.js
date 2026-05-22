gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // Fade in the whole grid
    tl.from(".about-image-wrapper", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    })
    .from(".artist-name", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1")
    .from(".bio-content p", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    }, "-=0.5")
    .from(".contact-btn", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5
    }, "-=0.3");

    // Subtle parallax on the artist photo
    gsap.to(".artist-photo", {
        scrollTrigger: {
            trigger: ".about-image-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -30
    });
});

// Optional: Add any additional animations or interactions here