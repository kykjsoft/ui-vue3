import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class', // or 'media'
    extract: {
      include: ['src/**/*.{vue,html,jsx,tsx}'],
      exclude: ['node_modules', '.git','dist'],
    },
    /* configurations... */
})