import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    watch: true,
    root: '__tests__/vitest',
    exclude: ['COPYME*.test.js']
  }
});
