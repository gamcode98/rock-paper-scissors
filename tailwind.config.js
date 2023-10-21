/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      barlow: ['Barlow Semi Condensed', 'sans-serif'] /* - Weights: 600, 700 */
    },
    borderWidth: {
      1: '1px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px'
    },
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'radial-gradient-from': 'hsl(214, 47%, 23%)',
        'radial-gradient-to': 'hsl(237, 49%, 15%)',
        'scissors-gradient-from': 'hsl(39, 89%, 49%)',
        'scissors-gradient-to': 'hsl(40, 84%, 53%)',
        yellow: 'hsla(39, 89%, 49%,.5)',
        'paper-gradient-from': 'hsl(230, 89%, 62%)',
        'paper-gradient-to': 'hsl(230, 89%, 65%)',
        blue: 'hsla(230, 89%, 62%,.5)',
        'rock-gradient-from': 'hsl(349, 71%, 52%)',
        'rock-gradient-to': 'hsl(349, 70%, 56%)',
        'lizard-gradient-from': 'hsl(261, 73%, 60%)',
        'lizard-gradient-to': 'hsl(261, 72%, 63%)',
        'cyan-gradient-from': 'hsl(189, 59%, 53%)',
        'cyan-gradient-to': 'hsl(189, 58%, 57%)'
      }
    }
  },
  plugins: []
}
