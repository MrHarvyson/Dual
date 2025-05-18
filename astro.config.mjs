// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Inicio',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Introducción', slug: 'inicio/introduccion_inicio', badge: { text: 'Importante', variant: 'danger' } },
                  ],
              },
              {
                  label: 'Maven',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Introducción', slug: 'maven/introduccion_maven' },
                      { label: 'Estructura', slug: 'maven/estructura_maven' },
                      { label: 'Creación', slug: 'maven/creacion_maven' },
                  ],
              },
          ],
      }),
	],

  adapter: vercel(),
});