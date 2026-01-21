# 🎨 Guide de Personnalisation - Les Délices de Sousou

Ce guide vous aide à personnaliser facilement votre site vitrine.

## 🔗 1. Mettre à jour les liens des réseaux sociaux

### Instagram
Cherchez et remplacez dans `index.html` :
```html
<a href="https://instagram.com" target="_blank">
```
Par :
```html
<a href="https://instagram.com/VOTRE_COMPTE" target="_blank">
```

### WhatsApp
Remplacez le numéro de téléphone :
```html
<a href="https://wa.me/33123456789" target="_blank">
```
Par :
```html
<a href="https://wa.me/33VOTRENUMERO" target="_blank">
```
Format : Code pays + numéro sans espaces (ex: 33612345678)

### Messenger
```html
<a href="https://m.me/username" target="_blank">
```
Par :
```html
<a href="https://m.me/VOTRE_PAGE_FACEBOOK" target="_blank">
```

---

## 🖼️ 2. Remplacer les images

### Structure recommandée
Créez un dossier `images/` et organisez vos photos :
```
images/
  ├── hero/
  │   └── hero-background.jpg
  ├── creations/
  │   ├── traditionnels.jpg
  │   ├── modernes.jpg
  │   ├── sales.jpg
  │   └── evenements.jpg
  └── collaborations/
      └── prestige.jpg
```

### Dans index.html, remplacez les URLs Unsplash

**Hero Section** (ligne ~34) :
```html
<!-- Ancienne URL -->
background-image: url('https://images.unsplash.com/...');

<!-- Nouvelle URL -->
background-image: url('images/hero/hero-background.jpg');
```

**Créations** (lignes ~100-150) :
```html
<!-- Gâteaux Traditionnels -->
<img src="images/creations/traditionnels.jpg" alt="Gâteaux traditionnels algériens">

<!-- Gâteaux Modernes -->
<img src="images/creations/modernes.jpg" alt="Gâteaux modernes">

<!-- Salés Prestige -->
<img src="images/creations/sales.jpg" alt="Salés prestige">

<!-- Tables Événementielles -->
<img src="images/creations/evenements.jpg" alt="Tables événementielles">
```

**Collaborations** (ligne ~220) :
```html
<img src="images/collaborations/prestige.jpg" alt="Événement prestige">
```

### Optimiser vos images
- **Format** : WebP ou JPEG optimisé
- **Taille Hero** : 1920x1080px
- **Taille Créations** : 800x600px
- **Poids** : < 500KB par image
- **Outil** : [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)

---

## 🎨 3. Personnaliser les couleurs

Dans `styles.css`, modifiez les variables (lignes 7-14) :

```css
:root {
    /* COULEURS ACTUELLES */
    --color-primary: #D4A574;        /* Doré principal */
    --color-primary-dark: #B8935E;   /* Doré foncé */
    --color-secondary: #F4E8DB;      /* Beige clair */
    --color-accent: #E8B4A8;         /* Rose pêche */
    --color-gold: #D4AF37;           /* Or */
    --color-dark: #2C2420;           /* Marron foncé */
    --color-text: #3D3530;           /* Texte principal */
    --color-text-light: #6B5F54;    /* Texte secondaire */
    --color-white: #FFFFFF;          /* Blanc */
    --color-cream: #FAF6F1;          /* Crème */
}
```

### Palettes suggérées

**Palette Rose Festive** :
```css
--color-primary: #E8A5A5;
--color-primary-dark: #C78787;
--color-secondary: #FFF0F5;
--color-accent: #FFB8C1;
```

**Palette Dorée Luxe** :
```css
--color-primary: #D4AF37;
--color-primary-dark: #B8935E;
--color-secondary: #FFF8DC;
--color-accent: #F4E8C1;
```

**Palette Vert Menthe** :
```css
--color-primary: #A8D5BA;
--color-primary-dark: #7FB69E;
--color-secondary: #F0F8F5;
--color-accent: #C8E6D0;
```

---

## ✍️ 4. Modifier les textes

### Titre principal (Hero)
Ligne ~35 dans `index.html` :
```html
<h1 class="hero-title">Les Délices de Sousou</h1>
```

### Sous-titre
Ligne ~36 :
```html
<p class="hero-subtitle">
    Gâteaux traditionnels & modernes<br>
    <span class="highlight">Salés prestige pour vos événements 🥳</span>
</p>
```

### Section Savoir-Faire
Ligne ~60 :
```html
<p class="lead-text">
    Votre texte personnalisé ici...
</p>
```

---

## 🎯 5. Ajouter/Modifier des créations

Dans la section "Nos Créations" (ligne ~100), dupliquez un bloc de carte :

```html
<div class="creation-card fade-in">
    <div class="creation-image">
        <img src="images/VOTRE_CREATION.jpg" alt="Description">
        <div class="creation-overlay">
            <span class="creation-tag">Nouveau</span>
        </div>
    </div>
    <div class="creation-info">
        <h3>Nom de votre création</h3>
        <p>Description alléchante de votre création...</p>
    </div>
</div>
```

---

## 📱 6. Configurer le numéro WhatsApp

Le format WhatsApp international est important :

**Format** : `https://wa.me/[CODE_PAYS][NUMERO]`

**Exemples** :
- France : `https://wa.me/33612345678`
- Algérie : `https://wa.me/213555123456`
- Belgique : `https://wa.me/32471234567`

⚠️ **Pas d'espaces, pas de zéros au début du numéro !**

---

## 🌐 7. Ajouter Google Analytics (optionnel)

1. Créez un compte [Google Analytics](https://analytics.google.com)
2. Obtenez votre ID de suivi (ex: G-XXXXXXXXXX)
3. Ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📧 8. Ajouter un email de contact

Dans le footer (ligne ~260), ajoutez :

```html
<div class="footer-contact">
    <h4>Contact</h4>
    <p>📧 contact@lesdelicesdesousou.com</p>
    <p>📱 +33 6 12 34 56 78</p>
</div>
```

---

## 🎭 9. Modifier les emojis des occasions

Ligne ~150, changez les emojis selon vos préférences :

```html
<div class="occasion-icon">💍</div>  <!-- Mariage -->
<div class="occasion-icon">💕</div>  <!-- Fiançailles -->
<div class="occasion-icon">🎂</div>  <!-- Anniversaire -->
<div class="occasion-icon">🎉</div>  <!-- Événements -->
<div class="occasion-icon">🤝</div>  <!-- Collaborations -->
```

**Autres suggestions** : 🎈 🎊 🥂 🍾 ✨ 🌟 ⭐ 💐 🌸 🎁

---

## 📐 10. Ajuster les espacements

Dans `styles.css`, modifiez les variables d'espacement (ligne 18) :

```css
:root {
    --spacing-xs: 0.5rem;   /* Très petit */
    --spacing-sm: 1rem;     /* Petit */
    --spacing-md: 2rem;     /* Moyen */
    --spacing-lg: 4rem;     /* Grand */
    --spacing-xl: 6rem;     /* Très grand */
}
```

---

## ✅ Checklist avant mise en ligne

- [ ] ✅ Tous les liens sociaux mis à jour
- [ ] ✅ Images personnelles ajoutées
- [ ] ✅ Textes personnalisés
- [ ] ✅ Numéros de téléphone corrects
- [ ] ✅ Email de contact ajouté
- [ ] ✅ Images optimisées (< 500KB)
- [ ] ✅ Testé sur mobile
- [ ] ✅ Testé sur différents navigateurs
- [ ] ✅ Google Analytics configuré (optionnel)
- [ ] ✅ Favicon ajouté

---

## 🚀 Ajouter un Favicon

1. Créez un favicon (32x32px) avec [Favicon.io](https://favicon.io)
2. Placez `favicon.ico` à la racine
3. Ajoutez dans `<head>` :

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## 💡 Conseils Pro

### Photos de qualité
- Éclairage naturel
- Arrière-plans propres et colorés
- Mettez en valeur les détails
- Variez les angles de vue

### Textes persuasifs
- Utilisez des verbes d'action
- Mettez en avant les bénéfices clients
- Restez authentique et chaleureux
- Ajoutez des émojis avec parcimonie

### SEO basique
Dans `<head>`, optimisez :
```html
<title>Les Délices de Sousou | Pâtisserie Algérienne Paris</title>
<meta name="description" content="Pâtisserie artisanale algérienne à Paris. Gâteaux traditionnels, créations modernes et buffets prestige pour vos événements.">
<meta name="keywords" content="patisserie algerienne, gateaux traditionnels, buffet prestige, paris">
```

---

## 🆘 Besoin d'aide ?

Si vous rencontrez des difficultés :

1. **Validez votre HTML** : [validator.w3.org](https://validator.w3.org)
2. **Validez votre CSS** : [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
3. **Testez la vitesse** : [PageSpeed Insights](https://pagespeed.web.dev)
4. **Testez le responsive** : Outils de développement du navigateur (F12)

---

**Bon courage et bonnes ventes ! 🎉🎂**
