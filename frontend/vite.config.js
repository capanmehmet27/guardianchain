import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // 5173 başka bir projede kullanıldığı için bu projeye ayrı port verildi.
    // strictPort: port doluysa başka porta kaymak yerine hata verir.
    port: 5180,
    strictPort: true,
    // /api ile başlayan istekleri backend'e yönlendirir
    proxy: { '/api': 'http://localhost:3000' },
  },
});
