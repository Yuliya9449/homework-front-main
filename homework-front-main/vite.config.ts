import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: './',
  build: {
    outDir: 'dist', // Папка для выходных файлов сборки
    assetsDir: 'assets', // Папка для статических ресурсов (изображений, шрифтов, и т.д.)
    sourcemap: true, // Включить генерацию sourcemaps
    minify: false, // Минификация кода (можно 'terser' или 'esbuild')
  },
});
