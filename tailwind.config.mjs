/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a1f3c',
        charcoal: '#2d2d2d',
        'off-white': '#f8f6f3',
        gold: {
          DEFAULT: '#c9a227',
          light: '#d4af37',
        },
        burgundy: '#722f37',
        slate: '#64748b',
        ivory: '#fffef9',
        'live-red': '#dc2626',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        'extra-wide': '0.1em',
      },
    },
  },
  plugins: [],
};
