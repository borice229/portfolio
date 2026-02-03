import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Utiliser des chemins relatifs pour que ça marche partout
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        en: './en.html',
      },
    },
  },
})