module.exports = {
	moduleNameMapper: { '^.+\\.(css|less|scss)$': 'identity-obj-proxy' },
	testEnvironment: 'jsdom',
	testEnvironmentOptions: { browser: 'chrome' },
	testMatch: ['<rootDir>/src/**/*.spec.js'],
	verbose: false,
}
