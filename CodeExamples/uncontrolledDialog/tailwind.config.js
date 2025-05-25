/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html", // Often for your main HTML file if it's at the root
		"./src/**/*.{js,jsx,ts,tsx}", // Scans all JS, JSX, TS, TSX files in the src folder and its subfolders
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
