export default [
  {
    ignores: ["node_modules", "dist"]
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      eslint: require("@eslint/js"),
      import: require("eslint-plugin-import")
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "import/order": ["warn", { "alphabetize": { "order": "asc" } }]
    }
  }
];
