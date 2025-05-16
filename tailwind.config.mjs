/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'axolo-pink': '#FFBCD9',
        'axolo-orange': '#FF9E5C',
        'axolo-yellow': '#FFF0B3',
        'axolo-brown': '#8B4513',
        'axolo-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Paytone One', 'Comic Sans MS', 'sans-serif'],
        'body': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};