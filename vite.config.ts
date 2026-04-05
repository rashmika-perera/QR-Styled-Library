import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  server: {
    port: 5173,
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "QRStyledLibrary",
      fileName: "index",
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library
      external: ["react", "react-dom", "qrcode.react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "qrcode.react": "QRCodeSVG"
        },
      },
    },
  }
});