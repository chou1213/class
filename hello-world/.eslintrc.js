module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    // 'eslint:recommend',
    // 'standard',
    'airbnb-base',
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-console': 'off'
  }
};
