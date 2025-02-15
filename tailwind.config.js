module.exports = {
	darkMode: "media",
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "white",
					dark: "#18191A",
				},
				foreground: {
					DEFAULT: "black",
					dark: "#EDEDED",
				},
				hover: {
					DEFAULT: "#F3F4F6",
					dark: "#2f2f30",
				},
			},
		},
	},
};
