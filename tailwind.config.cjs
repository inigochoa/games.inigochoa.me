/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['Noto Serif Variable', 'serif'],
				'number': ['Qahiri', 'sans-serif'],
				'text': ['Karla Variable', 'sans-serif'],
			},
			fontSize: {
				'4.5xl': '2.675rem',
			},
			lineHeight: {
				'under': '0.75',
			},
			scale: {
				'25': '0.25',
			},
			spacing: {
				'18': '4.5rem',
				'112' : '28rem',
			},
			translate: {
				'45/100': '45%',
			},
    },
	},
	plugins: [],
}
