// jest.config.js
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/main/webapp/**/*.{js,ts,vue}',
    '!src/main/webapp/**/*.component.ts',
    '!src/main/webapp/app/main.ts',
    '!src/main/webapp/app/router/*.ts',
    '!src/i18n.ts',
    '!**/*.d.ts',
    '!**/*AsyncModule.ts',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/test/javascript/',
    '<rootDir>/src/main/webapp/app/router',
    '<rootDir>/src/main/resources',
    '.*.json',
  ],
  coverageReporters: ['html', 'json-summary', 'text-summary', 'lcov', 'clover'],
  coverageDirectory: '<rootDir>/target/test-results/',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
