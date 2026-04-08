module.exports = {
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
  moduleNameMapper: {
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1'
  },
};
