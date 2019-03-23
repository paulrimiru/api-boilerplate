module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
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
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '.*\\.spec\\.(ts|tsx)$',
  roots: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
};