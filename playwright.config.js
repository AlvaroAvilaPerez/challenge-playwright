// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 0,
    timeout: 30000,
    workers: 1, // ✅ Force sequential execution

    expect: {
        timeout: 5000
    },

    use: {
        browserName: 'chromium', // ✅ Define a single browser
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        launchOptions: {
            args: ['--start-maximized'], // ✅ Run in full screen
            slowMo: 100 // ✅ Simulate human interactions
        }
    },

    projects: [
        {
            name: 'Single Browser Execution',
            use: {
                browserName: 'chromium',
                viewport: null, // ✅ Disable size restrictions
                launchOptions: {
                    args: ['--start-maximized'], // ✅ Force full screen
                },
                contextOptions: {
                    viewport: { width: 1920, height: 1080 }, // ✅ Force full screen at high resolution
                    screen: { width: 1920, height: 1080 }, // ✅ Adjust for full screen
                }
            }
        }
    ]
});
