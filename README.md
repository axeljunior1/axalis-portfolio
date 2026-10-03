# AXALIS — site vitrine

Site vitrine pour AXALIS (Digital Solutions & Development), basé sur le
flyer A5 : une page d'accueil qui enchaîne besoins, solutions,
différenciateur "mode hors ligne", réalisations (démos), approche, équipe
et contact — complétée par une page dédiée pour chacune des 4 solutions.

## Ouvrir le site en local

Aucune installation n'est strictement nécessaire : `index.html` peut
s'ouvrir directement dans un navigateur. Pour que les liens relatifs et le
routing fonctionnent exactement comme en production, servez plutôt le
dossier avec un petit serveur statique :

```bash
python -m http.server 4173
# puis ouvrir http://localhost:4173
```

(ou `npx serve .`, ou l'extension "Live Server" de VS Code)

## Structure

```
index.html                           page d'accueil (une page, ancres de section)
404.html                             page d'erreur (liens cassés)
solutions/
  applications-web-mobiles.html      solution 01 : besoins → solutions → exemples → contact
  automatisation-metier.html         solution 02
  renfort-technique.html             solution 03
  maintenance-evolution.html         solution 04
assets/
  style.css                          feuille de style partagée par toutes les pages
  script.js                          comportement du formulaire de contact (index.html)
  favicon.svg                        icône d'onglet (logo AXALIS)
robots.txt / sitemap.xml             indexation moteurs de recherche
```

Pas de dépendance de build (pas de npm install) : HTML/CSS/JS servis tels
quels. Les polices (Sora, IBM Plex Sans, IBM Plex Mono) sont chargées
depuis Google Fonts.

## Déployer

Le site est 100% statique, il se déploie donc sur n'importe quel hébergeur
de fichiers statiques. Deux options simples et gratuites :

### GitHub Pages
1. Dans les paramètres du dépôt GitHub → **Pages**.
2. Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Le site est publié sur `https://<compte>.github.io/<depot>/`.

### Netlify / Vercel
1. "Importer un projet" depuis le dépôt GitHub.
2. Aucune commande de build nécessaire (laisser les champs vides, ou
   "Build command: none" / "Publish directory: .").

### Nom de domaine personnalisé
`robots.txt`, `sitemap.xml` et les balises `og:url` / `canonical` de chaque
page utilisent `https://axalis.com/` comme URL de référence. À mettre à
jour avec le domaine réel une fois choisi (recherche globale/remplacement
de `axalis.com` dans le projet).

## Travailler à plusieurs

Ce dossier est un dépôt git, avec un remote GitHub déjà configuré
(`origin`). Pour collaborer :

```bash
git clone <url-du-depot>
git checkout -b ma-branche
# ... modifications ...
git add -A
git commit -m "..."
git push -u origin ma-branche
```

Ouvrez ensuite une pull request pour relire avant de fusionner dans
`main`.

## Pistes d'évolution

- Remplacer les visuels de démonstration (mockups CSS, cartes "Démo") par
  de vraies captures une fois les premiers projets clients disponibles.
- Donner à la section "Réalisations" sa propre page si le nombre de
  projets grandit.
- Brancher le formulaire de contact (`assets/script.js`) sur un vrai
  service d'envoi — actuellement visuel uniquement, sans backend.
- Remplacer l'URL `axalis.com` par le domaine réel une fois réservé.
