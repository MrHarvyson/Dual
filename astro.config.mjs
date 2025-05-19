// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VEDRUNA',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MrHarvyson/Dual' }],
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
						{ label: 'Instalación', slug: 'maven/instalacion_maven' },
						{ label: 'Estructura', slug: 'maven/estructura_maven' },
						{ label: 'Creación', slug: 'maven/creacion_maven' },
						{ label: 'Ciclo de vida', slug: 'maven/ciclo_maven' },
						{ label: 'JAR', slug: 'maven/jar' },
					],
				},
				{
					label: 'Docker', badge: { text: 'En desarrollo', variant: 'caution' },
					items: [
					],
				},
				{
					label: 'GitHub Actions', badge: { text: 'En desarrollo', variant: 'caution' },
					items: [
					],
				},
			],
		}),
	],

	adapter: vercel(),
});