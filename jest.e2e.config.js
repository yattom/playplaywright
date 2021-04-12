module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: [
    "<rootDir>/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  testTimeout: 3000,
  testEnvironmentOptions: {
    'jest-playwright': {
      launchOptions: {
        launchType: 'PERSISTENT',
        headless: false,
      }
    }
  }
}
