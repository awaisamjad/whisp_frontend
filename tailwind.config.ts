import tailwindcss from "@tailwindcss/vite";
// import type { Config } from 'tailwindcss';
import catppuccin from '@catppuccin/daisyui'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      colors: {
      },
    },
  },

  plugins: [ 
    tailwindcss()
  ],
  // daisyui: {
  //   // The top value of this array will be used as the default theme
  //   // You can use https://github.com/saadeghi/theme-change to switch between themes
  //   themes: [
  //     // You can simply select a catppuccin flavor with sane default colors
  //     catppuccin('macchiato'),
  //     // catppuccin('latte'),
  //     // Or you can optionally specify accent colors
  //     // catppuccin('frappe', 'pink'),
  //     // Or you can optionally customize more semantic colors
  //     // catppuccin('macchiato'),
  //     // 'cupcake',
  //     // Values not explicitly defined will use default values
  //     // catppuccin('mocha', { primary: 'sky', secondary: 'rosewater' }),
  //     // Fallback to default theme
  //   ],
  // },
};
