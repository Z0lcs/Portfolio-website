document.addEventListener('DOMContentLoaded', () => {
    
    // ----- MOBIL MENÜ KEZELÉSE -----
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Menü bezárása kattintás után
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ----- EGYSZERŰ MEGJELENÉS (FADE-IN) -----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Figyeljük a fade-in osztályú elemeket
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ----- EMAILJS -----
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            feedback.textContent = "Küldés folyamatban...";

            emailjs.sendForm('service_rz0ofi1', 'template_74yde49', contactForm)
                .then(() => {
                    feedback.textContent = "Üzenet sikeresen elküldve!";
                    feedback.style.color = "var(--neon-green)";
                    contactForm.reset();
                })
                .catch(() => {
                    feedback.textContent = "Hiba történt a küldés során.";
                    feedback.style.color = "#ff4d4d";
                });
        });
    }
});