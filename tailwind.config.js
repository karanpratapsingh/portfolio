module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#EEEbff',
        'primary-dark': '#2b2d42',
        light: '#FFFFFF',
        dark: '#161616',
        'placeholder-light': '#F0F0F0',
        'placeholder-dark': '#252525',
      },
      borderColor: {
        light: '#F0F0F0',
        dark: '#252525',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
