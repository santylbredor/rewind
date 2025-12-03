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

        about_who_highlight: "¿Quiénes",
        about_who_suffix: "somos?",
        about_intro: "Somos un equipo de creativos apasionados por el diseño, la innovación y la excelencia. En RewinD, no solo creamos proyectos, creamos experiencias que inspiran y transforman marcas.",

        team_title_1: "Nuestro",
        team_title_2: "Equipo",

        anna_name: "Anna Ocampo",
        anna_role: "Diseño Visual & Identidad Creativa",
        anna_bio: "Experta en diseño y estrategias de marca. Con más de 10 años de experiencia, Anna transforma ideas en experiencias visuales innovadoras.",
        anna_tag1: "Diseño de Marca",
        anna_tag2: "Estrategia Visual",
        anna_tag3: "Dirección Creativa",

        san_name: "Santiago Labrador",
        san_role: "Desarrollador & Creador de Innovación",
        san_bio: "Experto en desarrollo digital y soluciones creativas. Apasionado por fusionar tecnología y diseño para crear experiencias únicas.",
        san_tag1: "Desarrollo Web",
        san_tag2: "UI/UX",
        san_tag3: "Innovación Digital",

        values_title_1: "Nuestros",
        values_title_2: "Valores",

        value1_name: "Creatividad",
        value1_desc: "Transformamos ideas en experiencias visuales únicas con un enfoque artístico y técnico.",

        value2_name: "Precisión",
        value2_desc: "Cuidamos cada detalle para garantizar un resultado profesional y consistente.",

        value3_name: "Innovación",
        value3_desc: "Buscamos nuevas formas de narrar, diseñar y crear soluciones con impacto real.",

        cta2_title: "¿Listo para trabajar juntos?",
        cta2_desc: "Estamos siempre abiertos a nuevos proyectos y colaboraciones emocionantes.",
        cta2_button: "Hablemos de tu proyecto",

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

        about_who_highlight: "Who",
        about_who_suffix: "are we?",
        about_intro: "We are a team of creatives passionate about design, innovation, and excellence. At RewinD, we don’t just create projects — we build experiences that inspire and transform brands.",

        team_title_1: "Our",
        team_title_2: "Team",

        anna_name: "Anna Ocampo",
        anna_role: "Visual Design & Creative Identity",
        anna_bio: "Expert in design and brand strategy. With over 10 years of experience, Anna transforms ideas into innovative visual experiences.",
        anna_tag1: "Brand Design",
        anna_tag2: "Visual Strategy",
        anna_tag3: "Creative Direction",

        san_name: "Santiago Labrador",
        san_role: "Developer & Innovation Creator",
        san_bio: "Expert in digital development and creative solutions. Passionate about merging technology and design to create unique experiences.",
        san_tag1: "Web Development",
        san_tag2: "UI/UX",
        san_tag3: "Digital Innovation",

        values_title_1: "Our",
        values_title_2: "Values",

        value1_name: "Creativity",
        value1_desc: "We transform ideas into unique visual experiences through an artistic and technical approach.",

        value2_name: "Precision",
        value2_desc: "We take care of every detail to ensure a professional and consistent result.",

        value3_name: "Innovation",
        value3_desc: "We seek new ways to tell stories, design, and create impactful solutions.",

        cta2_title: "Ready to work together?",
        cta2_desc: "We’re always open to new projects and exciting collaborations.",
        cta2_button: "Let's talk about your project",

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

        about_who_highlight: "Quem",
        about_who_suffix: "somos?",
        about_intro: "Somos uma equipe de criativos apaixonados por design, inovação e excelência. Na RewinD, não apenas criamos projetos — criamos experiências que inspiram e transformam marcas.",

        team_title_1: "Nossa",
        team_title_2: "Equipe",

        anna_name: "Anna Ocampo",
        anna_role: "Design Visual & Identidade Criativa",
        anna_bio: "Especialista em design e estratégia de marca. Com mais de 10 anos de experiência, Anna transforma ideias em experiências visuais inovadoras.",
        anna_tag1: "Design de Marca",
        anna_tag2: "Estratégia Visual",
        anna_tag3: "Direção Criativa",

        san_name: "Santiago Labrador",
        san_role: "Desenvolvedor & Criador de Inovação",
        san_bio: "Especialista em desenvolvimento digital e soluções criativas. Apaixonado por unir tecnologia e design para criar experiências únicas.",
        san_tag1: "Desenvolvimento Web",
        san_tag2: "UI/UX",
        san_tag3: "Inovação Digital",

        values_title_1: "Nossos",
        values_title_2: "Valores",

        value1_name: "Criatividade",
        value1_desc: "Transformamos ideias em experiências visuais únicas com uma abordagem artística e técnica.",

        value2_name: "Precisão",
        value2_desc: "Cuidamos de cada detalhe para garantir um resultado profissional e consistente.",

        value3_name: "Inovação",
        value3_desc: "Buscamos novas formas de narrar, projetar e criar soluções com impacto real.",

        cta2_title: "Pronto para trabalharmos juntos?",
        cta2_desc: "Estamos sempre abertos a novos projetos e colaborações empolgantes.",
        cta2_button: "Vamos falar sobre o seu projeto",


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
// Parallax del título en "Quiénes somos"
const parallaxTitle = document.getElementById("parallaxTitle");

if (parallaxTitle) {
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;  // movimiento X
        const y = (e.clientY / window.innerHeight - 0.5) * 10; // movimiento Y
        
        // Movimiento sutil
        parallaxTitle.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Reset suave al salir del viewport
    document.addEventListener("mouseleave", () => {
        parallaxTitle.style.transform = "translate(0, 0)";
    });
}

});
