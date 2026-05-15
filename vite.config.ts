import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Injects <link rel="preload"> for the Inter latin woff2 after build,
// so the browser fetches the font in parallel with CSS instead of after it.
function fontPreloadPlugin(): Plugin {
  return {
    name: 'font-preload',
    transformIndexHtml: {
      order: 'post',
      handler(html: string, ctx: { bundle?: Record<string, { type: string }> }) {
        if (!ctx.bundle) return html
        const latinFont = Object.keys(ctx.bundle).find(
          f => f.includes('inter-latin-wght-normal') && f.endsWith('.woff2')
        )
        if (!latinFont) return html
        const tag = `<link rel="preload" href="/${latinFont}" as="font" type="font/woff2" crossorigin />`
        return html.replace('</head>', `  ${tag}\n  </head>`)
      },
    },
  }
}

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    fontPreloadPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Keep font filenames stable so preload links stay valid across builds.
        // Content-hash is still applied via the default [hash] for all other assets.
        assetFileNames: (info) =>
          info.name?.endsWith('.woff2')
            ? 'assets/fonts/[name][extname]'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
