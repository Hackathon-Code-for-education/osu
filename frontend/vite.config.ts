import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
    'process.env.CLIENT_SECRET': JSON.stringify(process.env.CLIENT_SECRET),
    'process.env.REDIRECT_URL': JSON.stringify(process.env.REDIRECT_URL),
    'process.env.REDIRECT_FULL_URL': JSON.stringify(process.env.REDIRECT_FULL_URL),
  },
  plugins: [react()],
  test: {
    globals: true,
  },
});
