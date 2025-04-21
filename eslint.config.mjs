import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  //react/jsx-no-undefexport default tseslint.config({
  


];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Removed redundant default export to avoid multiple default exports
tseslint.config(
  tseslint.configs.recommended,
);

export default eslintConfig;
