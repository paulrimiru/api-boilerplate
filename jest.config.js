module.exports = {
  preset: 'ts-jest',
  moduleDirectories: [
    ".",
    "node_modules",
    "src"
  ], 
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
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
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '.*\\.spec\\.(ts|tsx)$',
  roots: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
};