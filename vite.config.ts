import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        marketing: resolve(__dirname, 'marketing.html'),
        calling: resolve(__dirname, 'calling.html'),
        clients: resolve(__dirname, 'clients.html'),
        virtual: resolve(__dirname, 'services/virtual.html'),
        coldcalling: resolve(__dirname, 'services/cold-calling.html'),
        customerservice: resolve(__dirname, 'services/customer-service.html'),
        socialmedia: resolve(__dirname, 'services/social-media.html'),
        mediabuying: resolve(__dirname, 'services/media-buying.html'),
        webdesign: resolve(__dirname, 'services/web-design.html'),
        ecommerce: resolve(__dirname, 'services/ecommerce.html'),
        branding: resolve(__dirname, 'services/branding.html'),
        seo: resolve(__dirname, 'services/seo.html'),
      }
    }
  }
});
