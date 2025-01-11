import type { Config } from 'tailwindcss';
import catppuccin from '@catppuccin/daisyui'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      colors: {
        // primary: "var(--color-primary)",
        // secondary: "var(--color-secondary)",
        // tertiary: "var(--color-tertiary)",
        // text: "var(--color-text)",
        // textError: "var(--color-text-error)"
      },
    },
  },

  plugins: [ require("daisyui")],
  daisyui: {
    // The top value of this array will be used as the default theme
    // You can use https://github.com/saadeghi/theme-change to switch between themes
    themes: [
      // You can simply select a catppuccin flavor with sane default colors
      catppuccin('macchiato'),
      catppuccin('latte'),
      // Or you can optionally specify accent colors
      // catppuccin('frappe', 'pink'),
      // Or you can optionally customize more semantic colors
      // catppuccin('macchiato'),
      // 'cupcake',
      // Values not explicitly defined will use default values
      // catppuccin('mocha', { primary: 'sky', secondary: 'rosewater' }),
      // Fallback to default theme
    ],
  },
} satisfies Config;
