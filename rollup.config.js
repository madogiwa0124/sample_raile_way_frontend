import resolve from "@rollup/plugin-node-resolve"
import alias from "@rollup/plugin-alias"
import path from "node:path"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import multiEntry from "@rollup/plugin-multi-entry"
import postcss from "rollup-plugin-postcss"

export default {
  input: [
    "app/frontend/js/application.ts",
    "app/components/**/*.ts",
  ],
  output: {
    file: "app/assets/builds/application.js",
    format: "esm",
    inlineDynamicImports: true,
  },
  plugins: [
    multiEntry(),
    resolve(),
    typescript(),
    postcss({
      extensions: ['.css'],
      extract: true,
      minimize: true,
    }),
    alias({
      entries: [
        { find: '@js', replacement: path.resolve(__dirname,'app/frontend/js') },
        { find: '@components', replacement: path.resolve(__dirname,'app/components') },
      ]
    }),
    terser(),
  ]
}
