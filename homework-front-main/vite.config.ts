// import { defineConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Чтобы использовать глобальные переменные, такие как describe, it, expect
    // environment: 'jsdom', // Для тестирования React-компонентов
    // setupFiles: './src/setupTests.ts', // Опционально: файл с настройками для тестов
  },
  base: './',
  build: {
    outDir: 'dist', // Папка для выходных файлов сборки
    assetsDir: 'assets', // Папка для статических ресурсов (изображений, шрифтов, и т.д.)
    sourcemap: true, // Включить генерацию sourcemaps
    minify: false, // Минификация кода (можно 'terser' или 'esbuild')
  },
});
