import { defineConfig, Plugin, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
// import {join} from 'path';
// import {readFileSync} from 'fs';

// const crossOriginIsolation: Plugin = {
//   name: 'configure-server',

//   configureServer(server: ViteDevServer) {
//     server.middlewares.use((_req, res: import('http').ServerResponse, next: ()=> void) => {
//       res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//       res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
//       next();
//     })
//   },

// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    origin: 'http://localhost:5173/'
  }
});
