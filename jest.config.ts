module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/dist/', '<rootDir>/deploy/'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!(next-intl|use-intl)/)'],
};
