import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        text: "var(--color-text)",
        textError: "var(--color-text-error)"
      },
    },
  },

  plugins: []
} satisfies Config;
