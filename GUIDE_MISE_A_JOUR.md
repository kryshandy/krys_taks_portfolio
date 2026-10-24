# 📘 Guide Complet de Mise à Jour — Portfolio de Krys Handy

Bienvenue sur la documentation de maintenance de votre portfolio personnel. Ce site a été conçu avec une architecture modulaire et découplée (Astro 4 + TypeScript + Tailwind CSS + Collections de Contenu Zod). Vous pouvez mettre à jour l'ensemble de votre contenu en quelques secondes, soit directement via des fichiers Markdown / JSON, soit via l'interface visuelle TinaCMS.

---

## 🚀 1. Lancement Rapide en Local

Ouvrez un terminal dans ce dossier :
```bash
# Lancer le serveur de développement local
npm run dev

# Lancer avec l'interface visuelle TinaCMS
npm run tina

# Tester la compilation de production
npm run build
```
Le site sera accessible sur : `http://localhost:4321/`  
L'interface d'administration TinaCMS sera sur : `http://localhost:4321/admin`

---

## ✏️ 2. Mettre à Jour vos Informations Générales & Coordonnées

Toutes vos constantes globales (nom, titre, téléphone, email, liens sociaux) sont centralisées dans :
📁 **`src/utils/constants.ts`**

Pour modifier votre numéro ou vos liens, il vous suffit d'éditer l'objet `PERSONAL_INFO` ou `SOCIAL_LINKS` dans ce fichier.

---

## 💼 3. Ajouter ou Modifier un Projet

Chaque projet est un fichier Markdown situé dans :
📁 **`src/content/projects/`**

Pour ajouter un nouveau projet, créez simplement un fichier (ex: `mon-nouveau-projet.md`) avec ce modèle :

```markdown
---
title: "Nom du Projet — Sous-titre"
shortTitle: "Nom Court"
type: "mobile" # Choix possibles : 'web', 'mobile', 'cloud', 'architecture', 'consulting', 'ai'
status: "production" # Choix possibles : 'production', 'beta', 'development', 'archived', 'concept'
role: "lead" # Choix possibles : 'lead', 'senior', 'founder', 'consultant', 'cto', 'contributor'
year: 2026
startDate: "2026-01"
endDate: "2026-06" # Optionnel
stack: ["Kotlin", "Flutter", "Python", "Tailwind CSS"]
description: "Description concise du projet affichée sur la carte (max 300 car)."
problem: "Problème réel auquel le projet répond (max 500 car)."
solution: "Solution technologique apportée (max 500 car)."
impact: "Résultats concrets et retombées (max 500 car)."
metrics:
  - label: "Métrique 1"
    value: "100%"
  - label: "Métrique 2"
    value: "< 100ms"
demoUrl: "https://votre-demo.com" # Optionnel
repoUrl: "https://github.com/kryshandy/mon-projet" # Optionnel
featured: true # Mettre 'true' pour afficher dans les Projets Phares
highlight: true # Mettre 'true' pour ajouter le badge spécial
teamSize: 2
duration: "4 mois"
order: 1 # Ordre d'affichage
---

## Description détaillée

Rédigez ici le cas d'étude, les défis techniques surmontés et les choix d'architecture.
```

---

## 🎓 4. Ajouter une Expérience ou une Formation

Chaque expérience ou cursus est situé dans :
📁 **`src/content/experience/`**

Créez un fichier Markdown (ex: `nouveau-role.md`) :

```markdown
---
company: "Nom de l'Organisation / Entreprise"
role: "Intitulé du Rôle ou Diplôme"
type: "internship" # Choix : 'full-time', 'freelance', 'founder', 'consulting', 'internship'
location: "Yaoundé, Cameroun"
startDate: "2026-01"
endDate: "2026-12" # Laissez vide si 'current: true'
current: true # Mettre 'true' si c'est votre poste/statut actuel
description: "Description globale de la mission ou de la formation."
achievements:
  - "Réalisation majeure 1"
  - "Réalisation majeure 2"
  - "Réalisation majeure 3"
stack: ["Python", "Docker", "Cisco IOS"]
highlights:
  - "Point fort marquant"
order: 1
---
```

---

## 🛠️ 5. Ajouter ou Modifier une Compétence

Les compétences sont des fichiers JSON typés situés dans :
📁 **`src/content/skills/`**

Exemple pour créer ou modifier une compétence :
```json
{
  "category": "fullstack", // Choix : 'architecture', 'fullstack', 'reliability', 'cloud', 'ai', 'leadership'
  "name": "Intitulé de la compétence",
  "level": 5, // De 1 à 5
  "years": 2,
  "description": "Explication brève de votre niveau de maîtrise.",
  "icon": "lucide:code",
  "tags": ["Techno1", "Techno2", "Outil3"],
  "featured": true,
  "order": 1
}
```

---

## 📢 6. Ajouter une Activité Récente (Certifications, Hackathons, Releases)

Les activités s'affichent dans le journal chronologique :
📁 **`src/content/activities/`**

Créez un fichier JSON (ex: `2026-06-nouvelle-certif.json`) :
```json
{
  "date": "2026-06-15",
  "type": "certification", // Choix : 'commit', 'release', 'article', 'talk', 'milestone', 'learning', 'certification'
  "title": "Titre du jalon",
  "description": "Détails du résultat obtenu.",
  "url": "https://lien-externe.com",
  "repo": "https://github.com/kryshandy/repo",
  "tags": ["Tag1", "Tag2"],
  "project": "Nom du Projet Associé"
}
```

---

## 📄 7. Mettre à Jour votre Fichier CV

Pour actualiser votre CV à télécharger :
1. Exportez votre nouveau CV en PDF.
2. Renommez-le exactement : **`CV_TCHUENTE_KRYS_HANDY.pdf`**
3. Déposez-le dans le dossier : **`public/CV_TCHUENTE_KRYS_HANDY.pdf`**
Le bouton de téléchargement du site servira automatiquement votre nouveau fichier sans aucune modification de code.

---

## 🌐 8. Déploiement en Ligne (Hébergement Gratuit & Ultra-Rapide)

Le site génère un code statique ultra-performant et sécurisé (`dist/`). Vous pouvez l'héberger gratuitement sur :

### Option A — Cloudflare Pages (Recommandé)
1. Créez un dépôt GitHub pour `portfolio-premium` (ex: `github.com/kryshandy/portfolio`).
2. Dans Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages** > Connect to Git.
3. Configurez :
   - Framework preset : `Astro`
   - Build command : `npm run build`
   - Build output directory : `dist`
4. Cliquez sur **Save and Deploy**. Votre site sera en ligne avec SSL mondial en moins de 60 secondes !

### Option B — Vercel ou Netlify
- Importez le dépôt Git, Vercel et Netlify détectent automatiquement Astro et compilent en un clic.

---

*Fait sur-mesure pour TCHUENTE TAKODJOU KRYS HANDY. Rigueur, impact et excellence technique.*
