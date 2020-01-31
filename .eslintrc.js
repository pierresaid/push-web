module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  plugins: ["vue"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "warn"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
