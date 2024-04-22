/** @type {import('tailwindcss').Config} */
import { branding } from './branding.config.js';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: branding.colors.primary,
				secondary: branding.colors.secondary,
				secondary2: branding.colors.secondary2,
				accent: branding.colors.accent,
				accent2: branding.colors.accent2,
				accent3: branding.colors.accent3,
				accent4: branding.colors.accent4,

			},
			fontFamily: {
				typography: [branding.fonts.typography],
				secondary: [branding.fonts.secondary],
			},
		},
	},
	plugins: [],
}
