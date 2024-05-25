import resolve from "@rollup/plugin-node-resolve"
import alias from "@rollup/plugin-alias"
import path from "node:path"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"

export default {
  input: ["app/frontend/js/application.ts"],
  output: {
    file: "app/assets/builds/application.js",
    format: "esm",
    inlineDynamicImports: true,
  },
  plugins: [
    resolve(),
    typescript(),
    alias({
      entries: [
        { find: '@js', replacement: path.resolve(__dirname,'app/frontend/js') },
      ]
    }),
    terser(),
  ]
}
