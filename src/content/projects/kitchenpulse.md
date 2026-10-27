---
title: 'KitchenPulse — Gestion de Restauration Connectée en Temps Réel'
shortTitle: 'KitchenPulse'
type: 'web'
status: 'production'
role: 'lead'
year: 2025
startDate: '2024-05'
endDate: '2025-06'
stack: ['React', 'Node.js', 'Express', 'WebSockets', 'Tailwind CSS', 'PostgreSQL']
description: 'Système de gestion et commande de restaurant temps réel interconnectant clients, serveurs, cuisine et administration avec suivi des allergènes et calories.'
problem: "Goulots d'étranglement entre prise de commande, cuisine et facturation, causant des retards de service et des incidents graves liés aux allergies alimentaires non signalées."
solution: "Plateforme web full-stack réactive avec liaison bidirectionnelle WebSockets : tableau de bord cuisine instantané, borne client avec filtre d'allergènes et calcul calorique automatisé."
impact: "Réduction de 35% du temps d'attente, synchronisation sous 50ms entre postes, 0 incident d'allergie recensé."
metrics:
  - label: 'Latence synchronisation'
    value: '<50ms'
  - label: 'Temps commande'
    value: '-35%'
  - label: 'Rôles connectés'
    value: '4 interfaces'
repoUrl: 'https://github.com/kryshandy/KitchenPulse'
featured: true
highlight: false
client: 'Restauration moderne'
teamSize: 2
duration: '8 mois'
order: 3
---

## L'enjeu opérationnel

Dans la restauration contemporaine, la fluidité des flux détermine directement la rentabilité et la satisfaction. KitchenPulse résout le problème de désynchronisation entre la salle et la cuisine, tout en intégrant une dimension médicale et nutritionnelle indispensable : le contrôle strict des allergènes.

## Fonctionnalités clés

- **4 vues synchronisées en WebSocket** : Interface borne/client, interface tablette pour les serveurs, écran tactile de commande pour les chefs de cuisine, et dashboard analytique pour le gérant.
- **Moteur de validation nutritionnelle** : Calcul en temps réel de l'apport calorique et blocage automatique des combinaisons de plats incompatibles avec les allergies renseignées par le client.
- **Fiabilité réseau** : Reconnexion automatique avec reprise de session en cas de micro-coupure de la liaison locale.
