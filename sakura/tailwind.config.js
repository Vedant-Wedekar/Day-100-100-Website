/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // base / paper
        washi: '#FBF8F2', // cream white paper
        cream: '#F4EEE2',
        sumi: '#1A1614', // ink black
        ink: '#2B2622',
        // accents
        sakura: '#F4C7D2', // cherry blossom
        sakuradeep: '#E48AA0',
        matcha: '#7C9A6B',
        matchadeep: '#4F6B45',
        beni: '#C4453A', // deep japanese red
        kohaku: '#E89B3B', // amber / orange
        sora: '#8FB8D6', // sky blue
        kogane: '#D9A441', // golden yellow
        beige: '#E7DCC6',
        mist: '#CFCAC0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
      },
      // explicit opacity steps — non-default values must be registered
      opacity: {
        2: '0.02',
        3: '0.03',
        4: '0.04',
        6: '0.06',
        8: '0.08',
        15: '0.15',
        45: '0.45',
        65: '0.65',
        85: '0.85',
        95: '0.95',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(26,22,20,0.18)',
        float: '0 24px 60px -20px rgba(26,22,20,0.28)',
        glass: '0 8px 32px -8px rgba(26,22,20,0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2.25rem',
        blob: '42% 58% 63% 37% / 41% 44% 56% 59%',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(60px) rotate(360deg)', opacity: '0' },
        },
        sway: {
          '0%,100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
