import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { ProjectConfig } from 'vitest/node';

const browserTestConfig: ProjectConfig = {
  include: [
    'src/tests/browser/**/*.{test,spec}.tsx',
    'src/tests/**/*.browser.{test,spec}.tsx',
  ],
  browser: {
    enabled: true,
    provider: playwright(),
  },
  css: true,
};

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          // an example of file based convention,
          // you don't have to follow it
          include: [
            'src/tests/unit/**/*.{test,spec}.ts',
            'src/tests/**/*.unit.{test,spec}.ts',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        test: {
          ...browserTestConfig,
          name: 'browser',
          browser: {
            ...browserTestConfig.browser,
            instances: [{ browser: 'chromium' }],
          },
        },
        css: {
          modules: {
            scopeBehaviour: 'local',
          },
        },
      },
      {
        test: {
          ...browserTestConfig,
          name: 'headless-browser',
          browser: {
            ...browserTestConfig.browser,
            headless: true,
          },
        },
      },
    ],
  },
});
