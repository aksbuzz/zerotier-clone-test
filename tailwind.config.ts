import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ffb441',
        'primary-blue': '#4436ca',
        'dark-brand': '#262626',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-testimonial-card': 'linear-gradient(133deg, rgb(253, 178, 93), rgb(68, 54, 202))',
        'gradient-navbar': 'linear-gradient(0deg,#1a1a1a00,#1a1a1a60,#0a0a0a75,#0a0a0a)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontFamily: {
      //   sans: ['var(--font-karla)']
      // }
      fontSize: {
        heading: '28px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config
