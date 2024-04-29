import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y-')) return
    handler(warning)
  },
  preprocess: vitePreprocess(),
}
