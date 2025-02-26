import type { Config } from 'tailwindcss';
import customTheme from './src/styles/theme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...customTheme.colors,
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  plugins: []
} satisfies Config;
