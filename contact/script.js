document.addEventListener('DOMContentLoaded', function() {
            // CUSTOM CURSOR
        document.addEventListener("mousemove", (e) => {
            const cursor = document.querySelector(".custom-cursor");
            cursor.style.top = e.clientY + "px";
            cursor.style.left = e.clientX + "px";
        });
           // PRELOADER WITH SOUND
            window.addEventListener("load", () => {
                const preloader = document.getElementById("preloader");
                const rewindSound = document.getElementById("rewindSound");

                // Play sound
                if (rewindSound) {
                    rewindSound.volume = 0.4;  // suave
                    rewindSound.play().catch(() => {});
                }

                setTimeout(() => {
                    preloader.classList.add("hidden");

                    // Stop sound
                    if (rewindSound) rewindSound.pause();
                }, 2600);
            });


    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        const navBtns = nav.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
    
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const id = this.getAttribute('data-id');
            console.log('Hovering over portfolio item:', id);
        });
        
        item.addEventListener('mouseleave', function() {
            const id = this.getAttribute('data-id');
            console.log('Left portfolio item:', id);
        });
        
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const title = this.querySelector('.portfolio-title').textContent;
            const category = this.querySelector('.portfolio-category').textContent;
            
            console.log('Clicked portfolio item:', {
                id: id,
                title: title,
                category: category
            });
            
            alert(`Project: ${title}\nCategory: ${category}`);
        });
    });
    
    // Smooth scroll placeholder
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Navigation clicked:', this.textContent);
        });
    });

    // ---------------------------
    // ✔ FECHA DINÁMICA
    // ---------------------------
    function updateDateLang(lang) {
    const dateDisplay = document.querySelector('.date-display');
    if (!dateDisplay) return;

    const now = new Date();

    const days = {
        es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    };

    const months = {
        es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    };

    const langToUse = lang || "es";

    dateDisplay.innerHTML = `
        <span class="date-day">${days[langToUse][now.getDay()]}</span>
        <span class="date-number">${now.getDate()}</span>
        <span class="date-month">${months[langToUse][now.getMonth()]}</span>
    `;
}

    


    // ---------------------------
    // ✔ TRADUCCIÓN
    // ---------------------------
    let currentLanguage = 'es'; // Track current language

    const translations = {
    es: {
        about: "¿Quienes somos?",
        yesterday: "Para ayer",
        today: "Para hoy",
        contact: "Contacto",
        registered: "Marca registrada",

        // Portfolio categories
        branding: "Branding",
        editorial: "Diseño Editorial",
        event: "Diseño de Eventos",
        product: "Diseño de Producto",
        packaging: "Packaging",

        // Portfolio titles
        mercedes: "Mercedes-Benz",
        ciudadania: "Ciudadanía de las Mujeres",
        fiu: "FIU Festival",
        heritage: "Heritage Collection",
        botanical: "Botanical Series",
        akatuesh: "Akatuesh",

        // Date names
        days_es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        months_es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],

        footer_title: "Nosotros",
        footer_desc: "En Rewind Studio diseñamos experiencias visuales, narrativas y digitales con enfoque cinematográfico.",
        footer_cta_title: "¿Listo para crear algo inolvidable?",
        footer_cta_btn: "Contáctanos",
        footer_contact_title: "Contacto",
        footer_location: "📍 Cali, Colombia",
        footer_email: "✉ contacto@rewindstudio.com",
        footer_phone: "📞 +57 311 3365426",
        footer_follow_title: "Partners:",
        footer_socials: "Rebobinar para entender",

        contact_hero_title: "Creamos algo increíble juntos",
        contact_hero_desc: "¿Listo para darle vida a tu visión? Conversemos sobre tu próximo proyecto.",

        frames_title: "Rewind Frames",
        frames_subtitle: "Imágenes conceptuales del proyecto Rewind",

        contact_info_email: "Correo",
        contact_info_phone: "Teléfono",
        contact_info_location: "Ubicación",
        contact_location_text: "Cali, Colombia",
        contact_social_title: "Síguenos en redes sociales",

        form_title: "Envíanos un mensaje",
        form_name: "Nombre",
        form_email: "Correo",
        form_subject: "Asunto",
        form_message: "Mensaje",
        form_button: "Enviar mensaje",
        form_success: "¡Mensaje enviado con éxito! Te contactaremos pronto.",


    },

    en: {
        about: "About us",
        yesterday: "Yesterday's work",
        today: "Today's work",
        contact: "Contact",
        registered: "Registered trademark",

        branding: "Branding",
        editorial: "Editorial Design",
        event: "Event Design",
        product: "Product Design",
        packaging: "Packaging",

        mercedes: "Mercedes-Benz",
        ciudadania: "Women's Citizenship",
        fiu: "FIU Festival",
        heritage: "Heritage Collection",
        botanical: "Botanical Series",
        akatuesh: "Akatuesh",

        // Date names
        days_es: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months_es: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        footer_title: "About us",
        footer_desc: "At Rewind Studio we design visual, narrative and digital experiences with a cinematic approach.",
        footer_cta_title: "Ready to create something unforgettable?",
        footer_cta_btn: "Contact us",
        footer_contact_title: "Contact",
        footer_location: "📍 Cali, Colombia",
        footer_email: "✉ contact@rewindstudio.com",
        footer_phone: "📞 +57 311 3365426",
        footer_follow_title: "Partners:",
        footer_socials: "Rewind to understand",

        contact_hero_title: "Let's Create Something Amazing",
        contact_hero_desc: "Ready to bring your vision to life? Let's talk about your next project.",

        frames_title: "Rewind Frames",
        frames_subtitle: "Cinematic conceptual imagery from the Rewind project",

        contact_info_email: "Email",
        contact_info_phone: "Phone",
        contact_info_location: "Location",
        contact_location_text: "Cali, Colombia",
        contact_social_title: "Follow us on social media",

        form_title: "Send us a message",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_button: "Send message",
        form_success: "Message sent successfully! We'll get back to you soon.",
    },

    pt: {
        about: "Quem somos",
        yesterday: "Para ontem",
        today: "Para hoje",
        contact: "Contato",
        registered: "Marca registrada",

        branding: "Branding",
        editorial: "Design Editorial",
        event: "Design de Eventos",
        product: "Design de Produto",
        packaging: "Embalagem",

        mercedes: "Mercedes-Benz",
        ciudadania: "Cidadania das Mulheres",
        fiu: "Festival FIU",
        heritage: "Coleção Heritage",
        botanical: "Série Botânica",
        akatuesh: "Akatuesh",

        // Date names
        days_es: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months_es: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

        footer_title: "Sobre nós",
        footer_desc: "Na Rewind Studio criamos experiências visuais, narrativas e digitais com uma abordagem cinematográfica.",
        footer_cta_title: "Pronto para criar algo inesquecível?",
        footer_cta_btn: "Contate-nos",
        footer_contact_title: "Contato",
        footer_location: "📍 Cali, Colômbia",
        footer_email: "✉ contato@rewindstudio.com",
        footer_phone: "📞 +57 311 3365426",
        footer_follow_title: "Parceiros:",
        footer_socials: "Retroceda para entender",

        contact_hero_title: "Vamos Criar Algo Incrível",
        contact_hero_desc: "Pronto para dar vida à sua visão? Vamos conversar sobre o seu próximo projeto.",

        frames_title: "Rewind Frames",
        frames_subtitle: "Imagens conceituais cinematográficas do projeto Rewind",

        contact_info_email: "Email",
        contact_info_phone: "Telefone",
        contact_info_location: "Localização",
        contact_location_text: "Cali, Colômbia",
        contact_social_title: "Siga-nos nas redes sociais",

        form_title: "Envie-nos uma mensagem",
        form_name: "Nome",
        form_email: "Email",
        form_subject: "Assunto",
        form_message: "Mensagem",
        form_button: "Enviar mensagem",
        form_success: "Mensagem enviada com sucesso! Entraremos em contato em breve."


    }
};


    function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[lang][key]) {
            // Glitch animation reset
            el.classList.remove("glitch");
            void el.offsetWidth; // fuerza reflow para reiniciar animación

            // Set translated text
            el.textContent = translations[lang][key];

            // Apply glitch effect
            el.classList.add("glitch");
        }
    });
    updateDateLang(lang);
}



    const usFlag = document.querySelector('.flag img[alt="USA"]');
    if (usFlag) {
        usFlag.style.cursor = "pointer";
        usFlag.addEventListener("click", () => translatePage("en"));
    }

    const brFlag = document.querySelector('.flag img[alt="Brazil"]');
    if (brFlag) {
        brFlag.style.cursor = "pointer";
        brFlag.addEventListener("click", () => translatePage("pt"));
    }

    const coFlag = document.querySelector('.flag img[alt="Colombia"]');
    if (coFlag) {
        coFlag.style.cursor = "pointer";
        coFlag.addEventListener("click", () => translatePage("es"));
    }

        // Detect language automatically
    function detectLanguage() {
        const browserLang = navigator.language.toLowerCase();

        if (browserLang.startsWith("es")) return "es";
        if (browserLang.startsWith("en")) return "en";
        if (browserLang.startsWith("pt")) return "pt";

        return "es"; // default
    }

    const lang = detectLanguage();
translatePage(lang);
updateDateLang(lang);

// PARALLAX EFFECT ON HEADER
document.addEventListener("mousemove", (e) => {
    const amountX = (e.clientX / window.innerWidth - 0.5) * 10;
    const amountY = (e.clientY / window.innerHeight - 0.5) * 10;

    const logo = document.querySelector(".logo");
    const flags = document.querySelector(".flags");
    const dateDisplay = document.querySelector(".date-display");
    const headerContent = document.querySelector(".header-content");

    if (logo) {
        logo.style.transform = `translate(${amountX}px, ${amountY}px)`;
    }

    if (flags) {
        flags.style.transform = `translate(${amountX * 1.6}px, ${amountY * 1.6}px)`;
    }

    if (dateDisplay) {
        dateDisplay.style.transform = `translate(${amountX * 1.2}px, ${amountY * 1.2}px)`;
    }

    if (headerContent) {
        headerContent.style.transform = `translate(${amountX * 0.4}px, ${amountY * 0.4}px)`;
    }
});


 // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(error => error.textContent = '');
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            } else if (name.value.trim().length > 100) {
                document.getElementById('nameError').textContent = 'Name must be less than 100 characters';
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            } else if (email.value.trim().length > 255) {
                document.getElementById('emailError').textContent = 'Email must be less than 255 characters';
                isValid = false;
            }
            
            // Subject validation
            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                document.getElementById('subjectError').textContent = 'Subject is required';
                isValid = false;
            } else if (subject.value.trim().length > 200) {
                document.getElementById('subjectError').textContent = 'Subject must be less than 200 characters';
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                document.getElementById('messageError').textContent = 'Message is required';
                isValid = false;
            } else if (message.value.trim().length > 1000) {
                document.getElementById('messageError').textContent = 'Message must be less than 1000 characters';
                isValid = false;
            }
            
            if (isValid) {
                // Disable submit button
                const submitBtn = contactForm.querySelector('.form-submit');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Show success message
                    document.getElementById('formSuccess').style.display = 'block';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m22 2-7 20-4-9-9-4Z"/>
                            <path d="M22 2 11 13"/>
                        </svg>
                    `;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('formSuccess').style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
        
        // Real-time validation on blur
        ['name', 'email', 'subject', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('blur', function() {
                    const errorId = fieldId + 'Error';
                    const errorElement = document.getElementById(errorId);
                    
                    if (!this.value.trim()) {
                        errorElement.textContent = `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required`;
                    } else {
                        errorElement.textContent = '';
                    }
                });
            }
        });
    }

    document.querySelectorAll('.frame-card').forEach(card => {
    card.addEventListener('click', () => {
    card.classList.toggle('flip');
    });
    });
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // lo usamos solo para validar antes de enviar

        // -------- VALIDACIONES --------
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        let valid = true;

        if (name.value.trim() === "") valid = false;
        if (email.value.trim() === "" || !email.value.includes("@")) valid = false;
        if (subject.value.trim() === "") valid = false;
        if (message.value.trim() === "") valid = false;

        // Si la validación falla, no se envía
        if (!valid) {
            console.log("Form not valid");
            return;
        }

        // -------- ENVÍO REAL A FORMSUBMIT --------
        form.submit(); 
        // Esto fuerza el envío real, ignorando el preventDefault
    });

});

document.addEventListener("mousemove", (e) => {
    // Desactivar en móviles
    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2; 
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll(".parallax-text").forEach(el => {
        const depth = parseFloat(el.getAttribute("data-depth")) || 20;

        const moveX = -x * depth;
        const moveY = -y * depth;

        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});


});
