/*
 * @Author: SpenserCai
 * @Date: 2025-03-18 19:22:47
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2025-03-18 20:34:21
 * @Description: file content
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['src'] }),
    svgLoader({
      defaultImport: 'component', // 或者 'url'，取决于你想如何导入 SVG
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Holographic',
      fileName: (format) => `holographic.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些不想打包进库的依赖
      external: ['vue', 'react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}); 