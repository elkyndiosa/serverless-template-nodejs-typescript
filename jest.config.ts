module.exports = async () => {
  return {
    verbose: true,
    preset: '@shelf/jest-dynamodb',
    moduleDirectories: ['node_modules', 'src'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '@functions/(.*)': '<rootDir>/src/functions/$1',
      '@libs/(.*)': '<rootDir>/src/libs/$1',
      'src/(.*)': '<rootDir>/src/$1',
    },
  };
};
