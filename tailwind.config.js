/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#040E18',
          900: '#071A2B',
          850: '#0B1F33',
          800: '#102A43',
          700: '#1A3F63',
          600: '#23507D',
        },
        gold: {
          200: '#FBF2DD',
          300: '#F4E2B8',
          400: '#E1C27A',
          500: '#D4AF5A',
          600: '#C9A24A',
          700: '#B8862D',
          800: '#8E6319',
          900: '#5C3E08',
        },
        obsidian: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#0E0E0E',
          800: '#111111',
          700: '#181818',
          600: '#222222',
        },
        burgundy: {
          950: '#260612',
          900: '#3A0D1E',
          800: '#54152A',
          700: '#681C32',
          600: '#832742',
        },
        emerald: {
          950: '#061D16',
          900: '#0B3328',
          800: '#123F32',
          700: '#174D3B',
          600: '#216650',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F8F4EA',
          200: '#F4EFE3',
          300: '#EDE5D5',
          400: '#E0D5C1',
        },
        taupe: {
          300: '#E8E1D5',
          400: '#DFD6C7',
          500: '#C8BDA8',
          600: '#A99D87',
          700: '#857A65',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Playfair Display', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'royal': '0.35em',
        'monumental': '0.45em',
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #FBF2DD 0%, #D4AF5A 45%, #C9A24A 70%, #B8862D 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(212,175,90,0.15) 0%, rgba(201,162,74,0.05) 100%)',
        'navy-gradient': 'linear-gradient(180deg, #071A2B 0%, #040E18 100%)',
        'obsidian-radial': 'radial-gradient(circle at center, #181818 0%, #0A0A0A 100%)',
        'burgundy-glow': 'radial-gradient(circle at top right, rgba(84,21,42,0.4) 0%, rgba(10,10,10,0.95) 75%)',
        'emerald-glow': 'radial-gradient(circle at top right, rgba(18,63,50,0.35) 0%, rgba(7,26,43,0.95) 75%)',
      },
      boxShadow: {
        'gold-soft': '0 4px 20px -2px rgba(212, 175, 90, 0.25)',
        'gold-intense': '0 0 30px 2px rgba(212, 175, 90, 0.4)',
        'navy-deep': '0 20px 50px -10px rgba(4, 14, 24, 0.8)',
        'luxury-card': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
