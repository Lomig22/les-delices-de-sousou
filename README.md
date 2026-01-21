# 🎂 Les Délices de Sousou

Site vitrine pour **Les Délices de Sousou** - Pâtisserie artisanale algérienne & Buffets prestige.

## 🌟 À Propos

Les Délices de Sousou est une marque spécialisée dans :
- 🥐 Gâteaux traditionnels algériens
- 🍰 Pâtisseries modernes
- 🍽️ Buffets & salés prestige pour événements
- 💍 Prestations sur-mesure pour occasions spéciales

## 🎨 Caractéristiques du Site

### Design
- ✨ Interface festive et gourmande
- 🎨 Palette de couleurs chaudes (beige, crème, doré, rose)
- 📱 Responsive mobile-first
- 🎭 Animations CSS fluides et élégantes

### Sections
1. **Hero** - Section d'accueil immersive avec CTA
2. **Savoir-Faire** - Présentation des valeurs et de l'artisanat
3. **Créations** - Galerie photo des réalisations
4. **Occasions** - Événements et prestations
5. **Commander** - Processus de commande simplifié
6. **Collaborations** - Partenariats marques
7. **Contact** - Liens réseaux sociaux

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** - Interactions et animations
- **Google Fonts** - Playfair Display & Poppins

## 📦 Installation

1. Clonez le repository
```bash
git clone [URL_DU_REPO]
cd les-delices-de-sousou-main
```

2. Ouvrez `index.html` dans votre navigateur
```bash
open index.html
# ou
python -m http.server 8000
```

## 🎯 Utilisation

Le site est prêt à l'emploi ! Personnalisez simplement :

### Images
Remplacez les images d'Unsplash par vos propres photos :
- Dans `index.html`, cherchez les URLs Unsplash
- Remplacez par vos chemins d'images locaux

### Liens Réseaux Sociaux
Dans `index.html`, mettez à jour les liens :
```html
<!-- Instagram -->
<a href="https://instagram.com/VOTRE_COMPTE">

<!-- WhatsApp -->
<a href="https://wa.me/VOTRE_NUMERO">

<!-- Messenger -->
<a href="https://m.me/VOTRE_PAGE">
```

### Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #D4A574;
    --color-secondary: #F4E8DB;
    --color-accent: #E8B4A8;
    /* ... autres couleurs */
}
```

## 📱 Fonctionnalités

### Navigation
- ✅ Menu fixe avec effet au scroll
- ✅ Menu hamburger responsive
- ✅ Smooth scroll vers les sections

### Animations
- ✅ Fade-in au scroll (Intersection Observer)
- ✅ Effet parallax sur le hero
- ✅ Confettis animés
- ✅ Hover effects sur les cartes

### Performance
- ✅ Lazy loading des images
- ✅ Optimisation CSS
- ✅ Code JavaScript modulaire
- ✅ Performance monitoring

### Accessibilité
- ✅ Navigation au clavier
- ✅ Indicateurs de focus
- ✅ Alt text sur les images
- ✅ Sémantique HTML5

## 🎨 Personnalisation Avancée

### Ajouter une nouvelle section
```html
<section class="nouvelle-section" id="nouvelle">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-tag">Tag</span>
            <h2 class="section-title">Titre</h2>
            <div class="title-underline"></div>
        </div>
        <!-- Contenu -->
    </div>
</section>
```

### Modifier les animations
Dans `script.js`, ajustez les options de l'observer :
```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
```

## 📊 Analytics

Le site inclut des hooks pour l'analytics. Ajoutez votre code de tracking :

```javascript
// Dans script.js
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Votre code analytics ici
        gtag('event', 'click', { button_name: buttonText });
    });
});
```

## 🔧 Maintenance

### Mettre à jour les images
1. Placez vos images dans un dossier `/images`
2. Mettez à jour les chemins dans `index.html`
3. Optimisez les images (WebP recommandé)

### Ajouter des créations
Dans la section `#creations`, dupliquez une carte :
```html
<div class="creation-card fade-in">
    <div class="creation-image">
        <img src="votre-image.jpg" alt="Description">
        <div class="creation-overlay">
            <span class="creation-tag">Tag</span>
        </div>
    </div>
    <div class="creation-info">
        <h3>Titre</h3>
        <p>Description</p>
    </div>
</div>
```

## 🌐 Déploiement

### GitHub Pages
1. Poussez le code sur GitHub
2. Activez GitHub Pages dans Settings
3. Votre site sera accessible à `username.github.io/repo-name`

### Netlify
1. Connectez votre repo GitHub
2. Build command: (aucune)
3. Publish directory: `/`

### Vercel
```bash
npm install -g vercel
vercel
```

## 📝 TODO - Améliorations Futures

- [ ] Ajouter un formulaire de contact
- [ ] Intégrer un slider pour les témoignages clients
- [ ] Créer une galerie lightbox
- [ ] Ajouter un blog de recettes
- [ ] Intégrer un système de réservation
- [ ] Mode sombre optionnel
- [ ] Support multilingue (FR/AR)
- [ ] PWA (Progressive Web App)

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à :
1. Forker le projet
2. Créer une branche (`git checkout -b feature/amélioration`)
3. Commit vos changements (`git commit -m 'Ajout fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amélioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier.

## 👨‍💻 Auteur

Créé avec ❤️ et gourmandise pour Les Délices de Sousou.

## 📞 Support

Pour toute question ou support :
- 📧 Email : [VOTRE_EMAIL]
- 📱 Instagram : [@lesdelicesdesousou]
- 💬 WhatsApp : [VOTRE_NUMERO]

---

**🎉 Bon appétit et bonnes ventes ! 🎂**