# AXALIS — site vitrine

Prototype de site vitrine pour AXALIS (Digital Solutions & Development),
basé sur le flyer A5 et structuré en une page unique : accueil, besoins,
solutions, différenciateur "mode hors ligne", réalisations (démos),
approche, équipe, contact.

## Ouvrir le site

Aucune installation nécessaire : ouvrez simplement `index.html` dans un
navigateur (double-clic, ou glisser-déposer dans Chrome/Edge/Firefox).

## Structure

- `index.html` — page unique, HTML + CSS inline (pas de dépendances de
  build). Polices chargées depuis Google Fonts (Sora, IBM Plex Sans,
  IBM Plex Mono).

## Travailler à plusieurs

Ce dossier est un dépôt git local. Pour collaborer :

1. Créez un dépôt sur GitHub/GitLab (ou équivalent) et ajoutez-le comme
   remote :
   ```bash
   git remote add origin <url-du-depot>
   git push -u origin main
   ```
2. Votre collègue clone le dépôt et travaille sur une branche :
   ```bash
   git clone <url-du-depot>
   git checkout -b ma-branche
   ```
3. Chacun pousse ses changements et ouvre une pull request pour relire
   avant de fusionner dans `main`.

## Pistes d'évolution

- Découper les sections "Solutions" en vraies sous-pages (une par axe).
- Remplacer les visuels de démonstration (mockups CSS) par de vraies
  captures une fois les premiers projets clients disponibles.
- Brancher le formulaire de contact sur un service d'envoi d'e-mails
  (actuellement visuel uniquement, sans backend).
