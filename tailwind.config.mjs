/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				qualtop: {
					primary: '#E63B11',   // Naranja/Rojo principal
					black: '#07080A',     // Negro oficial
					yellow: '#F4A008',    // Amarillo complementario
					red: '#DB0D18',       // Rojo complementario
					grayLight: '#788089', // Gris claro
					grayDark: '#393E44',  // Gris oscuro
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				barlow: ['Barlow', 'sans-serif'],
			}
		},
	},
	plugins: [],
}