export const PERSONAL_INFO = {
  fullName: 'TCHUENTE TAKODJOU KRYS HANDY',
  displayName: 'Tchuente Krys Handy',
  monogram: 'KH',
  role: 'Concepteur Logiciel · Développeur Full-Stack & Mobile · IA Embarquée & Cybersécurité',
  tagline: 'Je conçois des architectures logicielles, des applications mobiles offline-first et des systèmes sécurisés à fort impact sociétal.',
  bioShort: 'Étudiant en Informatique & Intelligence Artificielle à Keyce Informatique (Yaoundé), lauréat de compétitions technologiques (1er Prix Hackathon EEUEZ, Finaliste Panafricain GCD4F) et bâtisseur de solutions logicielles résilientes.',
  location: 'Yaoundé, Cameroun',
  email: 'tchuentekryshandy@gmail.com',
  phone: '+237 655 08 09 13',
  phoneSecondary: '+237 659 46 66 76',
  availability: 'Disponible pour stages, missions innovantes & collaborations tech',
  university: 'Keyce Informatique',
  degree: 'Licence en Informatique & Intelligence Artificielle (2025 – Présent)',
  github: 'https://github.com/kryshandy',
  githubUser: 'kryshandy',
  linkedin: 'https://linkedin.com/in/tchuentekryshandy',
  cvPath: '/CV_TCHUENTE_KRYS_HANDY.pdf'
} as const;

export const NAV_ITEMS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Profil', href: '#profil' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Lab Résilience', href: '#lab' },
  { label: 'Activité', href: '#activite' },
  { label: 'Contact', href: '#contact' }
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/kryshandy',
    icon: 'lucide:github',
    label: 'Découvrir mes projets sur GitHub'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tchuentekryshandy',
    icon: 'lucide:linkedin',
    label: 'Me contacter sur LinkedIn'
  },
  {
    name: 'Email',
    href: 'mailto:tchuentekryshandy@gmail.com',
    icon: 'lucide:mail',
    label: 'M\'écrire un email direct'
  },
  {
    name: 'Téléphone',
    href: 'tel:+237655080913',
    icon: 'lucide:phone',
    label: '+237 655 08 09 13'
  }
] as const;

export const SKILL_CATEGORIES = [
  { key: 'fullstack', label: 'Web & Mobile Full-Stack', icon: 'lucide:smartphone' },
  { key: 'ai', label: 'IA Embarquée & Offline-First', icon: 'lucide:brain' },
  { key: 'reliability', label: 'Cybersécurité & Réseaux Cisco', icon: 'lucide:shield-check' },
  { key: 'architecture', label: 'Architecture Logicielle', icon: 'lucide:layers' },
  { key: 'cloud', label: 'Systèmes, Linux & DevOps', icon: 'lucide:terminal' },
  { key: 'leadership', label: 'Leadership & Impact Civique', icon: 'lucide:award' }
] as const;

export const PROJECT_TYPES = [
  { key: 'ai', label: 'Intelligence Artificielle', icon: 'lucide:brain' },
  { key: 'mobile', label: 'Mobile & Embarqué', icon: 'lucide:smartphone' },
  { key: 'web', label: 'Web & SaaS', icon: 'lucide:globe' },
  { key: 'architecture', label: 'Architecture & Réseaux', icon: 'lucide:layers' },
  { key: 'cloud', label: 'Systèmes & DevOps', icon: 'lucide:server' },
  { key: 'consulting', label: 'Gestion & Impact', icon: 'lucide:briefcase' }
] as const;

export const EXPERIENCE_TYPES = [
  { key: 'full-time', label: 'Temps plein' },
  { key: 'freelance', label: 'Projets Indépendants' },
  { key: 'founder', label: 'Initiative / Lead Tech' },
  { key: 'consulting', label: 'Consulting' },
  { key: 'internship', label: 'Cursus & Formation' }
] as const;

export const TESTIMONIAL_SOURCES = [
  { key: 'client', label: 'Client' },
  { key: 'colleague', label: 'Collaborateur' },
  { key: 'manager', label: 'Mentor / Jury' },
  { key: 'partner', label: 'Partenaire' }
] as const;