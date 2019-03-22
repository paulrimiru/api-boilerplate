module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "moduleDirectories": [
    ".",
    "node_modules",
    "src"
  ], 
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.spec.ts",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "routes.ts"
  ],
  coverageThreshold: {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  },
  roots: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
};