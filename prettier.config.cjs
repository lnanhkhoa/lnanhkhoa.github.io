// prettier.config.js
module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"), // MUST come last
  ],
  tailwindConfig: "./tailwind.config.cjs",
  arrowParens: "always",
  semi: false,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 120,
};
