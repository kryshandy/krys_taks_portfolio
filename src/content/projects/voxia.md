---
title: "VoxIA — IA Offline-First pour Personnes Malvoyantes"
shortTitle: "VoxIA"
type: "ai"
status: "development"
role: "lead"
year: 2026
startDate: "2024-09"
stack: ["Kotlin", "Android SDK", "On-Device AI", "Offline NLP", "Speech Recognition", "TTS", "Room DB"]
description: "Application Android native intégrant une IA 100% hors-ligne pour assister les personnes malvoyantes au quotidien sans dépendre d'une connexion internet."
problem: "En Afrique subsaharienne et en zones à connectivité instable, les solutions d'assistance visuelle basées sur le cloud sont inexploitables et coûteuses en données pour les personnes malvoyantes."
solution: "Conception d'une architecture offline-first en Kotlin natif embarquant des modèles de reconnaissance vocale et contextuelle sur l'appareil. Traitement local instantané des commandes, navigation assistée et description audio sans requête réseau."
impact: "Autonomie complète sans internet, latence de réponse < 150ms, préservation totale de la confidentialité des données utilisateur."
metrics:
  - label: "Mode hors-ligne"
    value: "100%"
  - label: "Latence traitement"
    value: "<150ms"
  - label: "Dépendance réseau"
    value: "0 Ko"
repoUrl: "https://github.com/Henri-Michel-Essomba-Djomeni/VoxIA"
featured: true
highlight: true
client: "Projet à fort impact social"
teamSize: 2
duration: "En continu"
order: 1
---

## Vision du projet

VoxIA est né d'une conviction profonde : **l'intelligence artificielle doit d'abord servir ceux qui en ont le plus besoin, particulièrement dans les contextes où l'accès à internet n'est pas garanti**.

En Afrique, les personnes malvoyantes affrontent une double barrière : le manque d'infrastructures physiques adaptées et la précarité des réseaux de télécommunication. La plupart des applications d'assistance actuelles dépendent d'APIs cloud lourdes, imposant un coût financier et une latence inacceptable en situation de danger.

## Architecture & Défis techniques

- **Traitement On-Device strict** : Intégration de modèles légers de traitement automatique du langage et de synthèse vocale fonctionnant directement sur le processeur mobile.
- **Performance native Kotlin** : Utilisation des coroutines Kotlin et de l'architecture MVVM moderne pour garantir une fluidité absolue à 60 FPS sans bloquer le thread principal.
- **Design Audio & Haptique** : Ergonomie pensée exclusivement pour des utilisateurs non-voyants, avec retours vibratoires directionnels et reconnaissance des intonations vocales.
