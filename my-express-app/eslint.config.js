export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];

