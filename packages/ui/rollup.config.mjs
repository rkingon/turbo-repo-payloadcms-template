import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
import banner2 from "rollup-plugin-banner2";

import pkg from "./package.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/main.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
  cache: true,
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: "globals.css",
    }),
    banner2(
      () => `
      'use client'
      `,
    ),
    resolve(),
    commonjs({
      sourceMap: false,
    }),
    typescript(),
  ],
  onwarn(warning, warn) {
    const ignored = ["MODULE_LEVEL_DIRECTIVE"];
    if (ignored.includes(warning.code)) {
      // silent!
    } else {
      warn(warning);
    }
  },
};

export default config;
