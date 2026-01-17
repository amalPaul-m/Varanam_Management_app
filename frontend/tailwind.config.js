module.exports = {
  theme: {
    extend: {
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(15deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '45%': { transform: 'rotate(15deg)' },
          '60%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        ring: 'ring 1s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
