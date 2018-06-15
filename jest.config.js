module.exports = {
  'moduleFileExtensions': [
    'js',
  ],
  'transformIgnorePatterns': [
    'node_modules/core-js',
    'node_modules/babel-runtime',
    'node_modules/lodash',
    'node_modules/vue',
  ],
  'moduleNameMapper': {
    'quasar': '<rootDir>/node_modules/quasar-framework/dist/quasar.mat.esm.js',
    '^src(.*)$': '<rootDir>/src$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  clearMocks: true,
}
