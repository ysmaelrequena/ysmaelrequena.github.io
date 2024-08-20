import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 80
  },
  site: 'https://framedataapi.com',
  trailingSlash: 'never',
  output: 'static',
  srcDir: './src',
  publicDir:'./public',
  outDir: './build',
  cacheDir: './build/cache',
  build: {
    format: 'file'
  },
  markdown: {
    syntaxHighlight: 'shiki',
  },
  integrations: [sitemap(), starlight({
    title: 'FDAPI Documentation',
    logo: {
      src: './src/assets/FDAPI_logo_blanco.png',
      replacesTitle: true,
    },
    social: {
      github: 'https://github.com/ysmaelrequena/Frame-data-API'
    }
    }),
  ],
});