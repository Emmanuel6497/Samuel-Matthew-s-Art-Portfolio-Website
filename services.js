gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // Animate title and subtitle
    tl.from(".services-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".services-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.5");
});

// Add click event listeners to "Get in Touch" buttons
document.addEventListener('DOMContentLoaded', () => {
    const getInTouchButtons = document.querySelectorAll('.get-in-touch-btn');
    getInTouchButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    });
});

// Animate service cards on scroll
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 75%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// Animate shipping section
gsap.from(".shipping-content", {
    scrollTrigger: {
        trigger: ".shipping-section",
        start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
});

// Animate CTA section
gsap.from(".cta-content", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%"
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out"
});
