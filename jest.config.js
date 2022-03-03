module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(scss|css|sass)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['/node_modules', '/.next']
}
