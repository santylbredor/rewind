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

        ft_intro: "Si buscas posicionarte, conquistar feeds, volverte memorable y ganarte un lugar real en la mente de tu audiencia, estás exactamente donde debes estar. Aquí las ideas se mueven rápido, siempre con sentido.",
        ft_intro_highlight1: "posicionarte",
        ft_intro_highlight2: "lugar real en la mente de tu audiencia",

        ft_subtitle: "Somos el equipo que convierte",
        ft_title_line1: "las urgencias en",
        ft_title_line2: "oportunidades",

        ft_description: "y los \"lo necesito para ayer\" en",
        ft_description_highlight: "resultados que dejan huella.",

        ft_trust_title: "Confía en",
        ft_trust_text: "Impulsamos tu marca con contenido que vibra, estrategias que funcionan y una presencia digital que se siente. Tu marca quiere despegar hoy.",
        ft_trust_highlight: "Nosotros la podemos catapultar.",

        ft_cta_title: "¡Hagamos RewinD!",

        footer_follow_us: "Síguenos",
        footer_partners: "Partners:",
    


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

        ft_intro: "If you're looking to position yourself, conquer feeds, become memorable, and earn a real place in your audience's mind, you're exactly where you need to be. Here, ideas move fast — always with purpose.",
        ft_intro_highlight1: "position yourself",
        ft_intro_highlight2: "a real spot in your audience's mind",

        ft_subtitle: "We are the team that turns",
        ft_title_line1: "urgencies into",
        ft_title_line2: "opportunities",

        ft_description: "and those 'I need it for yesterday' moments into",
        ft_description_highlight: "results that leave a mark.",

        ft_trust_title: "Trust in",
        ft_trust_text: "We boost your brand with content that resonates, strategies that work, and a digital presence you can feel. Your brand wants to take off today.",
        ft_trust_highlight: "We can catapult it.",

        ft_cta_title: "Let's make RewinD happen!",
        footer_follow_us: "Follow us",
        footer_partners: "Partners:",

    

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

        ft_intro: "Se você quer se posicionar, dominar os feeds, se tornar memorável e conquistar um espaço real na mente do seu público, você está exatamente onde deveria estar. Aqui as ideias se movem rápido — sempre com propósito.",
        ft_intro_highlight1: "se posicionar",
        ft_intro_highlight2: "um espaço real na mente do seu público",

        ft_subtitle: "Somos a equipe que transforma",
        ft_title_line1: "urgências em",
        ft_title_line2: "oportunidades",

        ft_description: "e os \"preciso para ontem\" em",
        ft_description_highlight: "resultados que marcam.",

        ft_trust_title: "Confie na",
        ft_trust_text: "Impulsionamos sua marca com conteúdo que vibra, estratégias que funcionam e uma presença digital que se sente. Sua marca quer decolar hoje.",
        ft_trust_highlight: "Nós podemos catapultá-la.",

        ft_cta_title: "Vamos fazer RewinD acontecer!",

        footer_follow_us: "Siga-nos",
        footer_partners: "Parceiros:",



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
ScrollReveal().reveal('.cta-circle-wrapper', {
    distance: '40px',
    origin: 'bottom',
    duration: 1200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    scale: 0.9,
    opacity: 0
});

});
