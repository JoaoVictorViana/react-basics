import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '50': '#f3f7fc',
          '100': '#e6eff8',
          '200': '#c8ddef',
          '300': '#98c0e1',
          '400': '#619fcf',
          '500': '#4a8fc4',
          '600': '#2c699d',
          '700': '#25547f',
          '800': '#22486a',
          '900': '#213d59',
          '950': '#16273b',
        },
        secondary: {
          '50': '#f1fcfb',
          '100': '#d1f6f3',
          '200': '#a4ebe7',
          '300': '#6edad8',
          '400': '#4ac2c4',
          '500': '#27a1a5',
          '600': '#1d7e84',
          '700': '#1b656a',
          '800': '#1a5155',
          '900': '#1a4447',
          '950': '#09262a',
        },
      
      }
    },
  },
  plugins: [],
}
export default config
