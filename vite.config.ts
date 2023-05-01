/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: false,
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
        '**/cypress/**',
        '**/types/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{vite,vitest,nyc,cypress,build}.config.*',
        '**/*.d.ts',
        '**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
        '**/server.ts',
        '**/main.ts',
        '**/entry-client.tsx',
        '**/entry-server.tsx',
        '**/utils/**',
      ],
    },
  },
  build: {
    sourcemap: true,
    minify: false,
  },
});
