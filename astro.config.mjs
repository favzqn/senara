import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://senara.id',
  output: 'static',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
  },
});
