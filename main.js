document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HAMBURGER MENÜ
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Linkre kattintáskor bezárjuk a menüt
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. GÖRGETÉSRE MEGJELENÉS ÉS SKILLS ANIMÁCIÓ
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Ha a skills szekció jön be, elindítjuk a progress barokat
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    function animateSkills() {
        document.querySelectorAll('.progress').forEach(bar => {
            // A HTML-ben style="width: XX%" formában megadott értéket használjuk
            const targetWidth = bar.getAttribute('style').split(':')[1];
            bar.style.width = '0'; // Alaphelyzetbe
            setTimeout(() => {
                bar.style.width = targetWidth; // Beúsztatás
            }, 100);
        });
    }

    // 3. KAPCSOLATŰRLAP VALIDÁCIÓ
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            
            // Egyszerű szimuláció
            feedback.textContent = "Üzenet elküldve! Köszönöm.";
            feedback.style.color = "#39ff14";
            contactForm.reset();
            
            setTimeout(() => feedback.textContent = "", 4000);
        });
    }
});