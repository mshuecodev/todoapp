import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			},
			colors: {
				primary: "#6366F1", // Tailwind's indigo-500
				secondary: "#818CF8" // Tailwind's indigo-400
			},
			boxShadow: {
				magic: "0 10px 15px -3px rgba(99, 102, 241, 0.1), 0 4px 6px -2px rgba(99, 102, 241, 0.05)"
			}
		}
	},
	plugins: []
}
export default config
