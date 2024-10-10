import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude],
        // globalSetup: 'vitestSetup.ts',
        mockReset: true,
        // outputFile: 'junit' // TODO: does github actions UI support this?
        // ui: true,
        setupFiles: ['vitestSetup.ts'],
        // runner: '',
        // reporters: '',
    },
});
