// GitHub Pages ne gère pas nativement le routing côté client : il sert
// 404.html pour toute URL qui ne correspond pas à un fichier existant.
// En copiant index.html vers 404.html après le build, on laisse
// React Router prendre le relais une fois le bundle chargé, et l'URL
// demandée (ex. /solutions/renfort-technique) s'affiche correctement.
// Sans effet sur Netlify/Vercel, qui utilisent déjà public/_redirects.
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('dist/404.html généré à partir de dist/index.html');
