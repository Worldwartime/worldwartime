import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
      $stores: path.resolve('./src/stores')
    }
  }
};

export default config;
