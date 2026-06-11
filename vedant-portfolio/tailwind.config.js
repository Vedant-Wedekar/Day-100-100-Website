/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f7f7fb',
        ink: '#0c0c14',
        'ink-soft': '#52525e',
        blue: '#2f5cff',
        violet: '#7b41ff',
        pink: '#ff3d9a',
        orange: '#ff8a3d',
        cyan: '#1fd2ff',
        green: '#19d49b',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      // NOTE: custom opacity steps are registered here so slash-notation
      // like border-ink/8 compiles reliably (your recurring Tailwind gotcha).
      opacity: { 4: '0.04', 6: '0.06', 8: '0.08' },
    },
  },
  plugins: [],
}
