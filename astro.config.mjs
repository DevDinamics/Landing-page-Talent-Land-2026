import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  // 🚀 Eliminamos el adapter y el import de vercel
  output: 'static', 
  integrations: [
    tailwind(), 
    react()
  ],
});