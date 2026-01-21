// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Effet de scroll sur la navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu mobile toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset pour la navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// EFFET FADE-OUT HERO AU SCROLL
// ========================================

const hero = document.getElementById('hero');
let ticking = false;

function updateHeroEffects() {
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < hero.offsetHeight) {
        // Fade-out progressif du contenu hero uniquement
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const opacity = Math.max(0, 1 - (scrolled / (hero.offsetHeight * 0.6)));
            heroContent.style.opacity = opacity;
        }
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateHeroEffects);
        ticking = true;
    }
}, { passive: true });

// ========================================
// CRÉATION DE CONFETTIS ANIMÉS
// ========================================

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;
    
    const colors = ['#D4A574', '#E8B4A8', '#D4AF37', '#F4E8DB'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * -100 + '%';
        confetti.style.opacity = Math.random() * 0.6 + 0.2;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confetti ${Math.random() * 5 + 5}s linear infinite`;
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        confettiContainer.appendChild(confetti);
    }
}

// Créer les confettis au chargement
createConfetti();

// ========================================
// ANIMATION DES CARTES AU HOVER
// ========================================

const creationCards = document.querySelectorAll('.creation-card');

creationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// ========================================
// COMPTEUR ANIMÉ POUR LES STATISTIQUES (optionnel)
// ========================================

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ========================================
// LOADING IMAGES AVEC LAZY LOADING
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// EFFET DE TYPING POUR LE TITRE (optionnel)
// ========================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// GESTION DES ÉVÉNEMENTS AU CHARGEMENT
// ========================================

window.addEventListener('load', () => {
    // Ajouter une classe pour indiquer que la page est chargée
    document.body.classList.add('loaded');
    
    // Log pour le debug
    console.log('🎉 Les Délices de Sousou - Site chargé avec succès!');
});

// ========================================
// EASTER EGG - CLIC SUR LE LOGO
// ========================================

let clickCount = 0;
const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
    clickCount++;
    
    if (clickCount === 5) {
        createCelebration();
        clickCount = 0;
    }
});

function createCelebration() {
    // Créer un effet de célébration
    const celebration = document.createElement('div');
    celebration.style.position = 'fixed';
    celebration.style.top = '50%';
    celebration.style.left = '50%';
    celebration.style.transform = 'translate(-50%, -50%)';
    celebration.style.fontSize = '4rem';
    celebration.style.zIndex = '10000';
    celebration.textContent = '🎉🎂✨';
    celebration.style.animation = 'fadeIn 0.5s ease, fadeOut 0.5s ease 1.5s';
    
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.remove();
    }, 2000);
}

// ========================================
// GESTION DU THÈME CLAIR/SOMBRE (optionnel)
// ========================================

// Pour une future implémentation si besoin
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// ========================================
// ANALYTICS & TRACKING (à configurer)
// ========================================

// Tracking des clics sur les boutons CTA
document.querySelectorAll('.btn-primary, .social-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent.trim();
        console.log(`📊 CTA cliqué: ${buttonText}`);
        
        // Ici, vous pouvez ajouter votre code d'analytics
        // Exemple: gtag('event', 'click', { button_name: buttonText });
    });
});

// ========================================
// PROTECTION BASIQUE DES IMAGES
// ========================================

// Désactiver le clic droit sur les images (optionnel)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // e.preventDefault(); // Décommenter pour activer
        // console.log('🖼️ Protection des images');
    });
});

// ========================================
// GESTION DES ERREURS D'IMAGES
// ========================================

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Image de fallback en cas d'erreur
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f4e8db" width="400" height="300"/%3E%3Ctext fill="%23d4a574" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage non disponible%3C/text%3E%3C/svg%3E';
        this.alt = 'Image non disponible';
    });
});

// ========================================
// PERFORMANCE MONITORING
// ========================================

// Mesurer le temps de chargement
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Temps de chargement: ${pageLoadTime}ms`);
    });
}

// ========================================
// ACCESSIBILITÉ - NAVIGATION AU CLAVIER
// ========================================

// Améliorer la navigation au clavier
document.addEventListener('keydown', (e) => {
    // Échapper pour fermer le menu mobile
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Ajouter des indicateurs de focus visibles
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--color-primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ========================================
// ANIMATIONS SUPPLÉMENTAIRES
// ========================================

// Les animations de scroll du hero sont gérées dans la section EFFET PARALLAX HERO
// pour éviter les conflits et améliorer les performances

console.log('✨ Script initialisé - Les Délices de Sousou');
