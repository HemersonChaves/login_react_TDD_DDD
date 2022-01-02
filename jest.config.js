module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/src"
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  // Indicates whether each individual test should be reported during the run
  verbose: true,

};
