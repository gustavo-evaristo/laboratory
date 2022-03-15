export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@services(.*)$': '<rootDir>/src/services',
    '^@database(.*)$': '<rootDir>/src/database',
    '^@utils(.*)$': '<rootDir>/src/utils',
    '^@entities(.*)$': '<rootDir>/src/models',
  },

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/', '/migrations/'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/**/*.spec.ts'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
