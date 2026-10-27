# Portfolio Officiel — TCHUENTE TAKODJOU KRYS HANDY

Site vitrine et portfolio d'ingénierie logicielle pour **Tchuente Takodjou Krys Handy** — Concepteur Logiciel & Développeur Full-Stack · IA Embarquée (Offline-First) · Cybersécurité & Réseaux Cisco.

Construit avec **Astro 4**, **TypeScript**, **Tailwind CSS**, collections de données typées via **Zod** et support d'édition visuelle **TinaCMS**.

---

## 🎯 Identité & Vision

- **Bâtisseur de solutions à fort impact social** : IA d'assistance offline pour personnes malvoyantes (**VoxIA**), sécurité civile & prévention (**Guardians AI**), e-santé & triage clinique (**SanteCam** — _1er Prix Hackathon EEUEZ_).
- **Architecture Offline-First & Résiliente** : Applications fonctionnant avec une latence quasi-nulle sans dépendre obligatoirement du cloud ou d'une connexion internet.
- **Rigueur d'Ingénierie & Sécurité** : Certification **OPSWAT Academy CIP** (Critical Infrastructure Protection), segmentation réseau Cisco IOS et protocoles défensifs.
- **Auto-mise à jour & Modularité** : Ajout de projets, compétences ou activités par simple création de fichiers Markdown/JSON ou via l'interface TinaCMS.

---

## 🏗 Stack Technique

| Couche                  | Technologie                                                                     |
| ----------------------- | ------------------------------------------------------------------------------- |
| **Générateur Statique** | Astro 4 (Content Collections typées Zod, zéro surcoût JS initial)               |
| **Design System**       | Tailwind CSS (Dark/Light mode personnalisé, tokens ergonomiques, accessibilité) |
| **Icônes**              | Astro Icon + Lucide Icons                                                       |
| **Typographie**         | Geist Sans & Geist Mono Variable                                                |
| **Gestion de Contenu**  | Markdown + JSON + TinaCMS (`/admin`)                                            |
| **Déploiement cible**   | Cloudflare Pages / Vercel / GitHub Pages (statique ultra-rapide)                |

---

## 🚀 Démarrage Rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement local
npm run dev
# -> Disponible sur http://localhost:4321

# 3. Lancer en mode édition visuelle TinaCMS
npm run tina
# -> Interface d'administration sur http://localhost:4321/admin

# 4. Compilation de production
npm run build
```

---

## 📁 Organisation du Code

```
src/
├── components/          # Composants UI d'excellence (Hero, Lab, Projects, Skills...)
├── content/             # Collections de données typées Zod
│   ├── projects/        # Fiches projets complètes (VoxIA, Guardians AI, KitchenPulse...)
│   ├── experience/      # Postes, formations et cursus académique
│   ├── skills/          # Compétences par catégories
│   ├── testimonials/    # Évaluations et retours de pairs / jury
│   └── activities/      # Journal chronologique des jalons et certifications
├── layouts/             # BaseLayout (SEO, a11y, thème) & MainLayout
├── pages/
│   ├── index.astro      # Vitrine principale interactive
│   ├── admin/           # Point d'entrée TinaCMS
│   └── rss.xml.js       # Flux RSS d'activité technique
├── styles/              # global.css (tokens, mesh gradient, dark/light classes)
└── utils/               # constants.ts (liens sociaux, coordonnées) & helpers.ts
public/
├── CV_TCHUENTE_KRYS_HANDY.pdf # CV officiel téléchargeable
├── favicon.svg          # Favicon monogramme KH
└── manifest.json        # PWA Web Manifest
```

---

## 📘 Guide de Maintenance

Consultez **`GUIDE_MISE_A_JOUR.md`** à la racine pour apprendre en 2 minutes à :

1. Ajouter un nouveau projet
2. Ajouter une compétence ou une certification
3. Mettre à jour votre CV
4. Déployer en ligne gratuitement sur Cloudflare Pages.

---

**© 2026 TCHUENTE TAKODJOU KRYS HANDY** · [GitHub](https://github.com/kryshandy) · [Email](mailto:tchuentekryshandy@gmail.com)
