module.exports = {
  extends: ["next/core-web-vitals", "@qsalatiel/eslint-config-typescript"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/button-has-type": 0,
  },
  plugins: ["testing-library"],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      files: ["*.styles.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
      },
    },
  ],
};
