import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    common: "src/common/index.ts",
    entities: "src/entities/index.ts",
    "domain-logic": "src/domain-logic/index.ts",
    repositories: "src/repositories/index.ts",
  },
  dts: true,
  splitting: false,
  sourcemap: true,
  treeshake: true,
  clean: true,
  format: ["cjs", "esm"],
});