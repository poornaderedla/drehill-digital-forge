
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: { '2xl': '1400px' }
		},
		extend: {
			colors: {
				lavender:      "#a29fe2",
				violet:        "#837fd8",
				indigo:        "#6d6598",
				grape:         "#645fce",
				'dreh-bg':     "#f5f7fa",
			},
			fontFamily: {
				head: ["'Space Grotesk'", "sans-serif"],
				body: ["Inter", "Roboto", "sans-serif"],
			},
			borderRadius: {
				DEFAULT: "6px",
				lg: "6px",
				md: "4px",
				sm: "2px",
			},
            // Large modular scale for large screens
			fontSize: {
				'display': ['clamp(2.8rem,6vw,5rem)', { lineHeight: '1.05', letterSpacing: '-.01em' }],
				'headline': ['clamp(2rem,3vw,3.2rem)', { lineHeight: '1.1', letterSpacing: '.01em' }],
				'title': ['clamp(1.25rem,2vw,2.2rem)', { lineHeight: '1.18' }],
				'body':     ['clamp(1.05rem,1.8vw,1.18rem)', { lineHeight: '1.65' }],
				'caption':  ['.99rem', { lineHeight: '1.38' }]
			},
            boxShadow: {
                'card': '0 4px 28px 0 rgba(100,95,206,.09), 0 1.5px 5px 0 rgba(131,127,216,.07)'
            }
		}
	},
	plugins: [
		require("tailwindcss-animate"), 
	],
} satisfies Config;
