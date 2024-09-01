import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-plugin-preserve-directives";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    lib: {
      entry: "./src/main.ts",
      formats: ["es"],
    },
    emptyOutDir: false,
    rollupOptions: {
      input: "./src/main.ts",
      output: {
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
      },
      plugins: [preserveDirectives()],
      external: ["react", "react/jsx-runtime", "react-dom", "react-dom/client"],
    },
  },
});
