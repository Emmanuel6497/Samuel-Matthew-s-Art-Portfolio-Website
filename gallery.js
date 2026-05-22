gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // Animate title and subtitle
    tl.from(".gallery-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".gallery-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.5");
});

// Animate gallery items on scroll
gsap.from(".gallery-item", {
    scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 75%"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Read more and modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more-link');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.gallery-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModalBtn = document.querySelector('.modal-close');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const itemDescription = this.closest('.item-description');
            const readMoreSpan = itemDescription.querySelector('.read-more');
            const fullDescription = itemDescription.querySelector('.full-description');

            if (fullDescription.style.display === 'none') {
                fullDescription.style.display = 'inline';
                readMoreSpan.style.display = 'none';
            } else {
                fullDescription.style.display = 'none';
                readMoreSpan.style.display = 'inline';
            }
        });
    });

    galleryItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.read-more-link')) {
                return;
            }
            openGalleryModal(this);
        });
    });

    closeModalBtn.addEventListener('click', closeGalleryModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });

    function openGalleryModal(item) {
        const clone = item.cloneNode(true);
        clone.classList.add('modal-gallery-item');

        clone.querySelectorAll('.read-more').forEach(el => {
            el.style.display = 'none';
        });
        clone.querySelectorAll('.full-description').forEach(el => {
            el.style.display = 'inline';
        });

        const modalLinks = clone.querySelectorAll('a');
        modalLinks.forEach(link => {
            if (link.classList.contains('cta-button')) {
                link.target = '_blank';
            }
        });

        const modalButtons = clone.querySelectorAll('button');
        modalButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        });

        modalBody.innerHTML = '';
        modalBody.appendChild(clone);
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeGalleryModal() {
        modal.classList.remove('open');
        modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }
});
