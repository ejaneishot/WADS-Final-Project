/**
 * Jest config for Next.js App Router.
 * next/jest applies transforms, moduleNameMapper, and path aliases from the app.
 */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // Only files under tests/ with *.test.ts(x) — keeps co-located specs out of the default run.
  testMatch: ["**/tests/**/*.test.(ts|tsx)"],
};

module.exports = createJestConfig(customJestConfig);