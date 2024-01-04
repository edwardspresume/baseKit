import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests/e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,

	timeout: 15 * 1000,
	expect: {
		timeout: 5 * 1000
	},
	fullyParallel: true,
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	}
};

export default config;
