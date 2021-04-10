/* eslint-disable no-undef */
module.exports = {
    rootDir: './../../',
    collectCoverage: false,
    collectCoverageFrom: [
      'src/app/**/*.{js,jsx}',
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    moduleDirectories: ['node_modules', 'src/app', './'],
    moduleFileExtensions: ['js', 'jsx', 'json'],
    transform: {
      '.*': 'babel-jest',
    },
    verbose: true,
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  };
  