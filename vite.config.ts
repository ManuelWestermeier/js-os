import { defineConfig } from "vite"

const config = defineConfig({
    base: "js-os",
    build: { outDir: "docs" }
})

export default config