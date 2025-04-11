module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'wave-color': {
          '0%': { color: '#1e40af' },       // blue-900
          '25%': { color: '#3b82f6' },            // blue-500
          '50%': { color: '#6366f1' },            // indigo-500
          '75%': { color: '#9333ea' },            // purple-600
        },
      
        'slide-out': {
          '0%,100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'wavy-color': 'wave-color 1s ease-in infinite',
        'slide-out': 'slide-out 2s ease-in-out infinite',
        'slide-in': 'slide-in 2s ease-in-out',
      },
    },
    fontFamily:{
      signature: ['Courgette',' cursive'],
    }
  },
  plugins: [],
};
