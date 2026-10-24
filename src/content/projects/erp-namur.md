---
title: "ERP Namur & CGA — Gestion Budgétaire, Trésorerie & Permissions RBAC"
shortTitle: "ERP Namur"
type: "web"
status: "production"
role: "contributor"
year: 2026
startDate: "2025-06"
stack: ["Django", "Python", "SQLite/PostgreSQL", "Tailwind CSS", "RBAC Security"]
description: "Système de gestion intégrée d'entreprise avec tableaux de bord financiers sur-mesure et cloisonnement strict des accès par rôles."
problem: "Manque de visibilité sur les fiches de trésorerie et risques d'accès non autorisés à des données sensibles de rémunération et budgets."
solution: "Implémentation d'un système de contrôle d'accès granulaire (Super Admin, Pilotage, Trésorier, Manager, Agent) avec tableaux de bord adaptés à chaque responsabilité."
impact: "Traçabilité 100% des validations de trésorerie, zéro fuite de privilèges, conformité opérationnelle totale."
metrics:
  - label: "Rôles sécurisés"
    value: "5 niveaux"
  - label: "Traçabilité financière"
    value: "100%"
  - label: "Conformité"
    value: "Validée"
repoUrl: "https://github.com/naumur2017-del/ERP_Namur"
featured: false
highlight: false
client: "CGA Naumur"
teamSize: 2
duration: "4 mois"
order: 6
---

## Système d'Information & Gouvernance Financière

Ce projet répondait aux exigences strictes de gestion d'une organisation ayant besoin d'automatiser le traitement de ses fiches de trésorerie (FT) et le suivi des projets d'investissement.

## Réalisations architecturales

- **Modèle de permissions fines (RBAC)** : Cloisonnement strict empêchant un agent opérationnel d'accéder aux budgets globaux, tout en accordant au trésorier la validation exclusive des dépenses.
- **Tableaux de bord dynamiques** : Calculs automatisés des ratios d'exécution budgétaire et génération instantanée d'états récapitulatifs.
- **Refonte visuelle professionnelle** : Élimination des dégradés superflus pour une interface épurée, hautement lisible et optimisée pour la productivité administrative.
