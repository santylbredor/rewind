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
        footer_follow_us: "Follow Us",
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

});
