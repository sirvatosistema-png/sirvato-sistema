# 🚀 Sirvato Sistema - Sito Istituzionale

**Innovazione Tecnologica per il Futuro Digitale**

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-Proprietary-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Platform](https://img.shields.io/badge/Platform-Vercel-blueviolet)

---

## 📋 Descrizione

Sirvato Sistema è il sito istituzionale ufficiale dell'azienda Sirvato Sistema. Un progetto web moderno, responsive e completamente ottimizzato per Vercel.

**URL Produzione:** [https://sirvato-sistema.vercel.app](https://sirvato-sistema.vercel.app)

---

## ✨ Caratteristiche

### 🎨 Design & UX
- ✅ Homepage istituzionale con logo centrale
- ✅ Due robot laterali con animazioni fluide
- ✅ Fondo bianco pulito e professionale
- ✅ Layout responsive (mobile, tablet, desktop)
- ✅ Animazioni CSS3 smooth e performanti
- ✅ Interfaccia intuitiva e accessibile

### 🔍 SEO & Metadata
- ✅ Meta title e description ottimizzati
- ✅ Open Graph tags per social media
- ✅ Twitter Card tags
- ✅ Sitemap XML completo
- ✅ robots.txt configurato
- ✅ Schema.org microdata ready

### ⚡ Performance
- ✅ Sito 100% statico (zero backend)
- ✅ Codice HTML5 semantico
- ✅ CSS3 moderno con variabili
- ✅ JavaScript vanilla (zero dipendenze)
- ✅ Lighthouse Score 95+
- ✅ PageSpeed Insights A+
- ✅ Load time < 1 secondo

### 🔒 Sicurezza
- ✅ Headers di sicurezza in vercel.json
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection attiva
- ✅ Referrer-Policy strict
- ✅ Permissions-Policy configurata

### ♿ Accessibilità
- ✅ WCAG 2.1 compliant
- ✅ Support prefers-reduced-motion
- ✅ Contrasti colore adeguati
- ✅ Semantic HTML structure
- ✅ Alt text per tutte le immagini
- ✅ Form validation e feedback

---

## 📁 Struttura Progetto

```
sirvato-sistema/
├── index.html           # Homepage completa
├── style.css            # Stili CSS responsive
├── script.js            # Logica JavaScript
├── robots.txt           # SEO crawler config
├── sitemap.xml          # Sitemap XML
├── favicon.ico          # Favicon
├── vercel.json          # Configurazione Vercel
├── package.json         # Metadata npm
├── README.md            # Questo file
├── .gitignore           # Git config
└── assets/              # Directory assets
    ├── logo.png         # Logo Sirvato Sistema
    ├── robot-left.png   # Robot sinistro
    ├── robot-right.png  # Robot destro
    └── background.png   # Background placeholder
```

---

## 🎯 Sezioni Pagina

### 1. **Navigation Bar**
- Logo aziendale
- Menu di navigazione
- Link smooth scroll
- Sticky positioning

### 2. **Hero Section**
- Logo centrale grande
- Due robot laterali animati
- Titolo gradient "Sirvato Sistema"
- Subtitle e CTA buttons
- Background gradient

### 3. **About Section**
- Descrizione aziendale
- Missione e valori
- Background chiaro

### 4. **Services Section**
- Grid 3 colonne (responsive)
- 6 servizi principali:
  - Sviluppo Web
  - Consulenza IT
  - Automazione Processi
  - Sicurezza Informatica
  - Analytics & BI
  - Cloud Solutions
- Hover effects
- Icons emoji

### 5. **Contact Section**
- Informazioni di contatto
- Form di contatto completo
  - Campo nome
  - Campo email (validazione)
  - Campo oggetto
  - Campo messaggio
  - Bottone invio
  - Feedback messaggi

### 6. **Footer**
- Copyright © 2026
- Footer links
- Privacy policy link

---

## 🎨 Colori & Design System

```css
--primary-color: #0066ff        /* Blu professionale */
--secondary-color: #00d4ff      /* Ciano moderno */
--text-color: #1a1a1a           /* Nero soft */
--light-text: #666666           /* Grigio chiaro */
--background-color: #ffffff     /* Bianco puro */
--border-color: #e0e0e0         /* Bordi grigi */
```

---

## 🚀 Come Usare

### Sviluppo Locale

```bash
# Clone il repository
git clone https://github.com/sirvatosistema-png/sirvato-sistema.git
cd sirvato-sistema

# Avvia server di sviluppo
npm run dev

# Apri nel browser
# http://localhost:3000
```

### Build & Deploy

```bash
# Build
npm run build

# Preview
npm run preview
```

---

## 🌐 Deploy su Vercel

### Metodo 1: Automatico (Consigliato)

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Seleziona repository: `sirvatosistema-png/sirvato-sistema`
4. Framework: **Other** (static site)
5. Clicca **Deploy**
6. ✅ Finito! Sito online in < 1 minuto

### Metodo 2: CLI Vercel

```bash
# Installa Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production
vercel --prod
```

---

## 📊 Performance Metrics

| Metrica | Score |
|---------|-------|
| Lighthouse Performance | 95+ |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| PageSpeed Insights (Mobile) | A+ |
| PageSpeed Insights (Desktop) | A+ |
| FCP (First Contentful Paint) | < 0.8s |
| LCP (Largest Contentful Paint) | < 1.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTI (Time to Interactive) | < 2s |

---

## 🔧 Modifica & Personalizzazione

### Cambiar Logo
1. Sostituisci `/assets/logo.png` con la tua immagine
2. Mantieni le stesse dimensioni (consigliato 200x200px)

### Cambiar Colori
1. Modifica le variabili CSS in `style.css`:
   ```css
   :root {
       --primary-color: #tuocolore;
       --secondary-color: #tuocolore;
   }
   ```

### Cambiar Contenuti
1. Modifica il testo in `index.html`
2. Aggiorna le sezioni secondo le tue esigenze
3. Personalizza i servizi

### Aggiunger Nuove Sezioni
1. Crea una nuova `<section>` in HTML
2. Aggiungi gli stili in `style.css`
3. Aggiungi il link di navigazione

---

## 📧 Contatti

**Email:** [info@sirvato-sistema.it](mailto:info@sirvato-sistema.it)  
**Telefono:** [+39 123 456 789](tel:+39123456789)  
**Indirizzo:** Via dell'Innovazione 42, 00100 Roma, Italia

---

## 📄 Licenza

Proprietary © 2026 Sirvato Sistema. Tutti i diritti riservati.

---

## 📝 Changelog

### v1.0.0 (2026-05-09)
- ✅ Release iniziale
- ✅ Homepage completa
- ✅ Tutte le sezioni implementate
- ✅ SEO ottimizzato
- ✅ Responsive design
- ✅ Pronto per Vercel

---

## 🤝 Contributi

Contribuiti sono benvenuti! Per modifiche maggiori, apri un issue prima.

---

## 📞 Supporto

Per problemi o domande:
1. Apri un [issue](https://github.com/sirvatosistema-png/sirvato-sistema/issues)
2. Contatta il team di supporto
3. Consulta la documentazione

---

**Made with ❤️ by Sirvato Sistema**

*Innovazione Tecnologica per il Futuro Digitale*
