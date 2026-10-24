import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'projects',
        label: 'Projets',
        path: 'src/content/projects',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Titre', required: true, ui: { component: 'text' } },
          { type: 'string', name: 'shortTitle', label: 'Titre court', ui: { component: 'text' } },
          {
            type: 'string', name: 'type', label: 'Type', required: true,
            options: ['web', 'mobile', 'cloud', 'architecture', 'consulting', 'ai'],
            ui: { component: 'select' }
          },
          {
            type: 'string', name: 'status', label: 'Statut', required: true,
            options: ['production', 'beta', 'development', 'archived', 'concept'],
            ui: { component: 'select' }
          },
          {
            type: 'string', name: 'role', label: 'Rôle', required: true,
            options: ['lead', 'senior', 'founder', 'consultant', 'cto', 'contributor'],
            ui: { component: 'select' }
          },
          { type: 'number', name: 'year', label: 'Année', required: true, ui: { component: 'number' } },
          { type: 'string', name: 'startDate', label: 'Date début (YYYY-MM)', ui: { component: 'text' } },
          { type: 'string', name: 'endDate', label: 'Date fin (YYYY-MM)', ui: { component: 'text' } },
          { type: 'string', name: 'stack', label: 'Stack', list: true, ui: { component: 'tags' } },
          { type: 'string', name: 'description', label: 'Description courte', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'problem', label: 'Problème', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'solution', label: 'Solution', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'impact', label: 'Impact', required: true, ui: { component: 'textarea' } },
          { type: 'object', name: 'metrics', label: 'Métriques', list: true, ui: { component: 'object' },
            fields: [
              { type: 'string', name: 'label', label: 'Libellé' },
              { type: 'string', name: 'value', label: 'Valeur' },
              { type: 'string', name: 'change', label: 'Évolution' }
            ]
          },
          { type: 'string', name: 'demoUrl', label: 'URL Démo', ui: { component: 'text' } },
          { type: 'string', name: 'repoUrl', label: 'URL Repo', ui: { component: 'text' } },
          { type: 'string', name: 'caseStudyUrl', label: 'URL Étude de cas', ui: { component: 'text' } },
          { type: 'boolean', name: 'featured', label: 'Projet phare', ui: { component: 'toggle' } },
          { type: 'boolean', name: 'highlight', label: 'Mise en avant', ui: { component: 'toggle' } },
          { type: 'boolean', name: 'confidential', label: 'Confidentiel', ui: { component: 'toggle' } },
          { type: 'string', name: 'client', label: 'Client', ui: { component: 'text' } },
          { type: 'number', name: 'teamSize', label: 'Taille équipe', ui: { component: 'number' } },
          { type: 'string', name: 'duration', label: 'Durée', ui: { component: 'text' } },
          { type: 'image', name: 'coverImage', label: 'Image de couverture' },
          { type: 'string', name: 'gallery', label: 'Galerie', list: true, ui: { component: 'text' } },
          { type: 'string', name: 'tags', label: 'Tags', list: true, ui: { component: 'tags' } },
          { type: 'number', name: 'order', label: 'Ordre', ui: { component: 'number' } },
          { type: 'rich-text', name: 'body', label: 'Contenu détaillé', isBody: true }
        ],
        ui: {
          router: ({ document }) => `/realisations/${document._sys.filename}`,
        },
      },
      {
        name: 'experience',
        label: 'Expérience',
        path: 'src/content/experience',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'company', label: 'Entreprise', required: true },
          { type: 'string', name: 'role', label: 'Rôle', required: true },
          {
            type: 'string', name: 'type', label: 'Type', required: true,
            options: ['full-time', 'freelance', 'founder', 'consulting', 'internship'],
            ui: { component: 'select' }
          },
          { type: 'string', name: 'location', label: 'Localisation', required: true },
          { type: 'string', name: 'startDate', label: 'Date début (YYYY-MM)', required: true },
          { type: 'string', name: 'endDate', label: 'Date fin (YYYY-MM)' },
          { type: 'boolean', name: 'current', label: 'Poste actuel', ui: { component: 'toggle' } },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'achievements', label: 'Réalisations', list: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'stack', label: 'Stack', list: true, ui: { component: 'tags' } },
          { type: 'number', name: 'teamSize', label: 'Taille équipe', ui: { component: 'number' } },
          { type: 'string', name: 'highlights', label: 'Points forts', list: true, ui: { component: 'text' } },
          { type: 'number', name: 'order', label: 'Ordre', ui: { component: 'number' } },
        ],
      },
      {
        name: 'skills',
        label: 'Compétences',
        path: 'src/content/skills',
        format: 'yaml',
        fields: [
          {
            type: 'string', name: 'category', label: 'Catégorie', required: true,
            options: ['architecture', 'fullstack', 'reliability', 'cloud', 'ai', 'leadership'],
            ui: { component: 'select' }
          },
          { type: 'string', name: 'name', label: 'Nom', required: true },
          { type: 'number', name: 'level', label: 'Niveau (1-5)', required: true, ui: { component: 'number', min: 1, max: 5 } },
          { type: 'number', name: 'years', label: 'Années', ui: { component: 'number', min: 0, max: 30 } },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'icon', label: 'Icône (lucide:)', ui: { component: 'text' } },
          { type: 'string', name: 'tags', label: 'Tags', list: true, ui: { component: 'tags' } },
          { type: 'boolean', name: 'featured', label: 'Mis en avant', ui: { component: 'toggle' } },
          { type: 'number', name: 'order', label: 'Ordre', ui: { component: 'number' } },
        ],
      },
      {
        name: 'testimonials',
        label: 'Témoignages',
        path: 'src/content/testimonials',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'author', label: 'Auteur', required: true },
          { type: 'string', name: 'role', label: 'Rôle', required: true },
          { type: 'string', name: 'company', label: 'Entreprise' },
          { type: 'image', name: 'avatar', label: 'Avatar' },
          {
            type: 'string', name: 'source', label: 'Source', required: true,
            options: ['client', 'colleague', 'manager', 'partner'],
            ui: { component: 'select' }
          },
          { type: 'string', name: 'content', label: 'Contenu', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'project', label: 'Projet concerné' },
          { type: 'string', name: 'date', label: 'Date (YYYY-MM)', required: true },
          { type: 'boolean', name: 'featured', label: 'Mis en avant', ui: { component: 'toggle' } },
          { type: 'number', name: 'order', label: 'Ordre', ui: { component: 'number' } },
        ],
      },
      {
        name: 'activities',
        label: 'Activité',
        path: 'src/content/activities',
        format: 'yaml',
        fields: [
          { type: 'datetime', name: 'date', label: 'Date', required: true },
          {
            type: 'string', name: 'type', label: 'Type', required: true,
            options: ['commit', 'release', 'article', 'talk', 'milestone', 'learning', 'certification'],
            ui: { component: 'select' }
          },
          { type: 'string', name: 'title', label: 'Titre', required: true },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'url', label: 'URL', ui: { component: 'text' } },
          { type: 'string', name: 'repo', label: 'Repo', ui: { component: 'text' } },
          { type: 'string', name: 'tags', label: 'Tags', list: true, ui: { component: 'tags' } },
          { type: 'string', name: 'project', label: 'Projet', ui: { component: 'text' } },
        ],
        ui: {
          filename: {
            slugify: (values) => `${values.date.split('T')[0]}-${values.type}-${values.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50)}`,
          },
        },
      },
    ],
  },
});