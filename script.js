document.addEventListener('DOMContentLoaded', function() {

    /* ================================
   AUDIO PLAYER FUNCTIONALITY
================================ */

const audio = document.getElementById("podcastAudio");
const playBtn = document.getElementById("playBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("audioProgress");

/* Play / Pause */
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

/* Forward & Rewind */
rewindBtn.addEventListener("click", () => {
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
});

forwardBtn.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
});

/* Update progress bar */
audio.addEventListener("timeupdate", () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percentage + "%";
});

/* Seek via progress bar */
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

/* ================================
   PARALLAX TEXT WITH MOUSE
================================ */

const parallaxText = document.querySelectorAll(".parallax-text");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;  // movimiento sutil
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    parallaxText.forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`; 
    });
});


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


        footer_follow_us: "Síguenos",
        footer_partners: "Partners:",

        hero_title: "EXPERIMENTA LA NARRATIVA",
        hero_subtitle: "Un viaje multimedia a través del tiempo, la memoria y la percepción.\nExplora historias narradas a través del video, el sonido y el arte visual.",
        moving_stories_title: "Moving Stories",
        moving_stories_desc: "Experimenta narrativas que se despliegan a través del tiempo",

        Button1: "Comenzar la Experiencia",
        Button2: "Ver Galería",
        vertical_story_title: "Historia Vertical",
        vertical_story_desc: "Una experiencia narrativa íntima",

        animated_legends: "← LEYENDAS ANIMADAS",
        animated_legends_title: "Crónicas Animadas",
        animated_legends_desc: "Un viaje visual a través de recuerdos animados",

        narrative_series: "← SERIES NARRATIVAS",
        narrative_series_title: "Historia Vertical",
        narrative_series_desc: "Una experiencia narrativa íntima",

        visual_poetry_title: "Poesía Visual",
        visual_poetry_desc: "Historias expresadas en la quietud",

        audio_narrative_title: "Audio Narrativo",
        audio_narrative_desc: "Escucha las historias detrás del silencio",
        audio_narrative_journal_title: "Rewind: El Diario Sonoro",
        audio_narrative_journal_desc: "Un viaje inmersivo a través del sonido y la memoria."

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
        footer_follow_us: "Follow us",
        footer_partners: "Partners:",

        hero_title: "EXPERIENCE NARRATIVE",
        hero_subtitle: "A multimedia journey through time, memory, and perception.\nExplore stories told through video, sound, and visual art.",

        moving_stories_title: "Moving Stories",
        moving_stories_desc: "Experience narratives that unfold across time",

        Button1: "Start the Experience",
        Button2: "View Gallery",

        vertical_story_title: "Vertical Story",
        vertical_story_desc: "An intimate narrative experience",

        animated_legends: "← ANIMATED LEGENDS",
        animated_legends_title: "Animated Chronicles",
        animated_legends_desc: "A visual journey through animated memories",

        narrative_series: "← NARRATIVE SERIES",
        narrative_series_title: "Vertical Story",
        narrative_series_desc: "An intimate narrative experience",

        visual_poetry_title: "Visual Poetry",
        visual_poetry_desc: "Stories expressed through stillness",

        audio_narrative_title: "Audio Narrative",
        audio_narrative_desc: "Listen to the stories behind the silence",
        audio_narrative_journal_title: "Rewind: The Soundscape Journal",
        audio_narrative_journal_desc: "An immersive journey through sound and memory."

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

        hero_title: "EXPERIMENTE A NARRATIVA",
        hero_subtitle: "Uma jornada multimídia através do tempo, da memória e da percepção.\nExplore histórias narradas por meio de vídeo, som e arte visual.",

        moving_stories_title: "Moving Stories",
        moving_stories_desc: "Experimente narrativas que se desdobram ao longo do tempo",

        Button1: "Iniciar a Experiência",
        Button2: "Ver Galeria",

        vertical_story_title: "História Vertical",
        vertical_story_desc: "Uma experiência narrativa íntima",

        animated_legends: "← LENDAS ANIMADAS",
        animated_legends_title: "Crônicas Animadas",
        animated_legends_desc: "Uma jornada visual através de memórias animadas",

        narrative_series: "← SÉRIES NARRATIVAS",
        narrative_series_title: "História Vertical",
        narrative_series_desc: "Uma experiência narrativa íntima",

        visual_poetry_title: "Poesia Visual",
        visual_poetry_desc: "Histórias expressas na quietude",

        audio_narrative_title: "Narração em Áudio",
        audio_narrative_desc: "Ouça as histórias por trás do silêncio",
        audio_narrative_journal_title: "Rewind: O Diário Sonoro",
        audio_narrative_journal_desc: "Uma jornada imersiva através do som e da memória."

        

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
        usFlag.addEventListener("click", () => {
            currentLanguage = "en";
            translatePage("en");
            updateDateLang("en");
        });
    }

    const brFlag = document.querySelector('.flag img[alt="Brazil"]');
    if (brFlag) {
        brFlag.style.cursor = "pointer";
        brFlag.addEventListener("click", () => {
            currentLanguage = "pt";
            translatePage("pt");
            updateDateLang("pt");
        });
    }

    const coFlag = document.querySelector('.flag img[alt="Colombia"]');
    if (coFlag) {
        coFlag.style.cursor = "pointer";
        coFlag.addEventListener("click", () => {
            currentLanguage = "es";
            translatePage("es");
            updateDateLang("es");
        });
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
// HOVER PLAY
document.querySelectorAll(".story-card").forEach(card => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});

// MODAL VARIABLES
const modal = document.getElementById("videoModal");
const modalContent = document.getElementById("videoModalContent");
const closeModal = document.getElementById("closeVideoModal");

document.querySelectorAll(".story-card").forEach(card => {
    const previewVideo = card.querySelector("video");

    card.addEventListener("click", () => {
        // Clonar el video original (solución garantizada)
        const clonedVideo = previewVideo.cloneNode(true);

        clonedVideo.controls = true;
        clonedVideo.muted = false;
        clonedVideo.currentTime = 0;
        clonedVideo.playsinline = true;

        // Limpiar contenido previo del modal
        modalContent.innerHTML = "";
        modalContent.appendChild(clonedVideo);

        // Mostrar modal
        modal.classList.add("active");

        // Reproducir
        clonedVideo.load();
        clonedVideo.play().catch(() => {
            clonedVideo.muted = true;
            clonedVideo.play();
        });
    });
});

// CERRAR EL MODAL
function closeVideo() {
    modal.classList.remove("active");
    modalContent.innerHTML = "";
}

closeModal.addEventListener("click", closeVideo);

// Cerrar clickeando fuera
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeVideo();
    }
});
// VISUAL POETRY MODAL
const imageCards = document.querySelectorAll(".poetry-card");
const imageModal = document.getElementById("imageModal");
const imageModalMain = document.getElementById("imageModalMain");
const closeImageModal = document.getElementById("closeImageModal");
const prevBtn = document.getElementById("imagePrev");
const nextBtn = document.getElementById("imageNext");

let currentIndex = 0;

// Abrir modal
imageCards.forEach(card => {
    card.addEventListener("click", () => {
        currentIndex = parseInt(card.dataset.index);
        openImageModal();
    });
});

function openImageModal() {
    const img = imageCards[currentIndex].querySelector("img").src;
    imageModal.classList.add("active");
    imageModalMain.src = img;
}

// Cerrar modal
closeImageModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
});

// Navegación
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageCards.length;
    openImageModal();
});
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageCards.length) % imageCards.length;
    openImageModal();
});

// Cerrar haciendo click fuera
imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        imageModal.classList.remove("active");
    }
});

// Controles con teclado
document.addEventListener("keydown", (e) => {
    if (!imageModal.classList.contains("active")) return;

    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") imageModal.classList.remove("active");
});




});
