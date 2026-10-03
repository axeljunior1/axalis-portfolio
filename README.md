# AXALIS — site vitrine (React)

Site vitrine pour AXALIS (Digital Solutions & Development), basé sur le
flyer A5 : une page d'accueil qui enchaîne besoins, solutions,
différenciateur "mode hors ligne", réalisations (démos), approche, équipe
et contact — complétée par une page dédiée pour chacune des 4 solutions.

Construit avec **React + Vite + React Router**. La version précédente
(HTML/CSS statique multi-pages) reste disponible sur la branche `main`
et sur `develop` ; ce travail de migration vit sur une branche dédiée
(voir `git branch`), le temps d'être relu avant fusion.

## Démarrer en local

Prérequis : [Node.js](https://nodejs.org/) 18+ (inclut npm).

```bash
npm install
npm run dev
# puis ouvrir l'URL affichée (http://localhost:4174 par défaut)
```

Le serveur de développement recharge automatiquement à chaque
modification de fichier.

## Build de production

```bash
npm run build      # génère le dossier dist/
npm run preview    # sert dist/ localement pour vérifier le build
```

## Structure

```
index.html                  point d'entrée Vite (<div id="root">, charge src/main.jsx)
public/                     fichiers servis tels quels (favicon, robots.txt, sitemap.xml, _redirects)
src/
  main.jsx                  point de montage React + BrowserRouter
  App.jsx                   déclaration des routes
  styles/global.css         feuille de style globale (partagée par toutes les pages)
  components/
    Layout.jsx               Header + <Outlet/> + Footer, commun à toutes les pages
    Header.jsx, Footer.jsx, Logo.jsx, Breadcrumb.jsx
    ProjectCard.jsx           carte "projet démonstratif" (réalisations + pages solutions)
    icons.jsx                 icônes SVG en ligne réutilisées entre sections
    ScrollToHash.jsx          scroll vers l'ancre de section (#besoins, #contact...) après navigation
  pages/
    Home.jsx                  assemble toutes les sections de l'accueil
    SolutionPage.jsx          page générique pour les 4 solutions (pilotée par data/solutions.js)
    NotFound.jsx               page 404
  sections/                  une section = un fichier (Hero, Besoins, Solutions, Difference,
                              Realisations, Approche, Apropos, Contact)
  data/
    solutions.js               contenu des 4 solutions (besoins, mise en place, exemples/formats)
    projects.js                 projets de démonstration (gestion de stock, rendez-vous, tableau de bord)
scripts/copy-404.js         copie dist/index.html -> dist/404.html après le build (voir "Déployer")
```

Les polices (Sora, IBM Plex Sans, IBM Plex Mono) sont chargées depuis
Google Fonts dans `index.html`.

## Routes

| Route | Page |
|---|---|
| `/` | Accueil (ancres `#besoins`, `#solutions`, `#difference`, `#realisations`, `#approche`, `#apropos`, `#contact`) |
| `/solutions/applications-web-mobiles` | Solution 01 |
| `/solutions/automatisation-metier` | Solution 02 |
| `/solutions/renfort-technique` | Solution 03 |
| `/solutions/maintenance-evolution` | Solution 04 |
| `*` | Page 404 |

Ajouter ou modifier une solution se fait dans `src/data/solutions.js`
sans toucher au code des pages — `SolutionPage.jsx` est générique.

## Déployer

Le build (`npm run build`) produit un dossier `dist/` statique. Le
routing est géré côté client (React Router), ce qui demande une petite
config côté hébergeur pour que `/solutions/...` fonctionne en accès
direct (pas seulement via un clic depuis l'accueil) :

### Netlify / Vercel
1. "Importer un projet" depuis le dépôt GitHub.
2. Build command : `npm run build` — Publish directory : `dist`.
3. `public/_redirects` (copié dans `dist/`) indique à Netlify de
   rediriger toute route vers `index.html` — Vercel fait cela par
   défaut pour les apps React détectées automatiquement.

### GitHub Pages
1. `npm run build` (en local ou via une action CI) pour générer `dist/`.
2. Publier le contenu de `dist/` sur la branche `gh-pages` (ou dans
   Settings → Pages avec le dossier `dist` si le workflow le permet).
3. Le script `postbuild` (`scripts/copy-404.js`) duplique
   automatiquement `index.html` en `404.html` dans `dist/` : GitHub
   Pages sert cette page pour toute URL inconnue, ce qui laisse
   React Router prendre le relais et afficher la bonne page côté
   client.

### Nom de domaine personnalisé
Les balises `og:url` / `canonical` de chaque page, ainsi que
`robots.txt` et `sitemap.xml`, utilisent `https://axalis.com/` comme
URL de référence. À mettre à jour avec le domaine réel une fois choisi
(recherche globale/remplacement de `axalis.com` dans le projet).

## Travailler à plusieurs

```bash
git clone <url-du-depot>
git checkout -b ma-branche
npm install
npm run dev
# ... modifications ...
git add -A
git commit -m "..."
git push -u origin ma-branche
```

Ouvrez ensuite une pull request pour relire avant de fusionner.

## Pistes d'évolution

- Remplacer les visuels de démonstration (mockups CSS, cartes "Démo")
  par de vraies captures une fois les premiers projets clients
  disponibles (`src/data/projects.js`).
- Brancher le formulaire de contact (`src/sections/Contact.jsx`) sur un
  vrai service d'envoi — actuellement visuel uniquement, sans backend.
- Mettre en place un pipeline CI (GitHub Actions) qui build et déploie
  automatiquement `dist/` à chaque push sur `main`.
- Remplacer l'URL `axalis.com` par le domaine réel une fois réservé.
