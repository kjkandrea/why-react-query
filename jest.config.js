export default {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  preset: 'ts-jest',
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^.+.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
  verbose: true,
};
