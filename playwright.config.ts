import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/',
  timeout: 30 * 1000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
