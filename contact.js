gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // Animate title and subtitle
    tl.from(".contact-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".contact-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.5");
});

// Animate contact methods on scroll
gsap.from(".contact-method", {
    scrollTrigger: {
        trigger: ".contact-methods",
        start: "top 75%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// Animate form on scroll
gsap.from(".contact-form-wrapper", {
    scrollTrigger: {
        trigger: ".contact-form-wrapper",
        start: "top 80%"
    },
    opacity: 0,
    x: 40,
    duration: 1,
    ease: "power3.out"
});

// Email Form Submission
const emailForm = document.getElementById('emailForm');
const submitBtn = document.querySelector('.submit-btn');
const formStatus = document.getElementById('formStatus');

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const senderName = document.getElementById('senderName').value.trim();
    const senderEmail = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!senderName || !senderEmail || !message) {
        formStatus.textContent = '✗ Please complete all fields before sending.';
        formStatus.className = 'form-status error';
        return;
    }

    // Set pending state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    formStatus.textContent = '⏳ email delivery pending...';
    formStatus.className = 'form-status pending';

    // Clear any previous hide timeout
    if (window.statusTimeout) {
        clearTimeout(window.statusTimeout);
    }

    fetch("https://formsubmit.co/ajax/Samuelmatthewboluwatife@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: senderName,
            email: senderEmail,
            message: message,
            _subject: `New message from ${senderName} (GSM Portfolio)`
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success || data.status === "success") {
            formStatus.textContent = '✓ Email successfully delivered';
            formStatus.className = 'form-status success';
            emailForm.reset();
            
            // Auto hide success message after 8 seconds
            window.statusTimeout = setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 8000);
        } else {
            formStatus.textContent = '✗ email delivery not-successful, try using the email link above or other options to communicate with Samuel Matthew';
            formStatus.className = 'form-status error';
        }
    })
    .catch(error => {
        formStatus.textContent = '✗ email delivery not-successful, try using the email link above or other options to communicate with Samuel Matthew';
        formStatus.className = 'form-status error';
    })
    .finally(() => {
        submitBtn.textContent = 'Send Email';
        submitBtn.disabled = false;
    });
});
