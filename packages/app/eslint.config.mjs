import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  antfu({
    typescript: true,
  }),

  {
    ignores: ['.output', 'ios', 'android', 'dist'],
  },
)
