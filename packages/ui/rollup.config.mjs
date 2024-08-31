import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/main.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: "ui.css",
    }),
    resolve(),
    commonjs(),
    typescript(),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}), // Exclude dependencies
    ...Object.keys(pkg.peerDependencies || {}), // Exclude peerDependencies
  ],
};

export default config;
