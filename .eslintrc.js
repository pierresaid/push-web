module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
    "vue/require-prop-types": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
