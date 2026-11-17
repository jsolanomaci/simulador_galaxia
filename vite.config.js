import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  publicDir: 'public',
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['..'],
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
    copyPublicDir: !fs.existsSync(path.resolve(process.cwd(), 'dist', 'models', 'solar_system.glb')),
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    {
      name: 'serve-external-glb-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/models/')) {
            const fileName = path.basename(req.url.split('?')[0]);
            const publicFile = path.resolve(process.cwd(), 'public', 'models', fileName);
            const exportsFile = path.resolve(process.cwd(), '..', 'sistemas_starfield', 'exports', fileName);
            const target = fs.existsSync(publicFile) ? publicFile : exportsFile;
            if (fs.existsSync(target)) {
              res.setHeader('Content-Type', 'model/gltf-binary');
              fs.createReadStream(target).pipe(res);
              return;
            }
          }
          next();
        });
      },
    },
  ],
});
