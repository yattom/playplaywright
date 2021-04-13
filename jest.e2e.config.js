module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: [
    "<rootDir>/e2e/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  testTimeout: 3000,
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],  // ['firefox', 'chromium', 'webkit'],
      launchOptions: {
        launchType: 'PERSISTENT',
        headless: true,
      }
    }
  }
}
