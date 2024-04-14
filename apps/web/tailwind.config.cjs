/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
	],
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
    themeRoot: ':root',
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
};

module.exports = config;
