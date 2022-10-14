import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
const name = "ui-vue3"

// https://vitejs.dev/config/
export default defineConfig(({command, mode, ssrBuild})=>{

  const shareSetting = {
    extensions: ['.js', '.ts', '.vue', '.json', '.d.ts'],
    plugins: [
      vue(), 
      WindiCSS()
    ],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
  }
  if (command === 'serve') {
    return {
      ...shareSetting
    }
  } else {
    return {
      ...shareSetting,
      build: {
        target: 'modules',
        outDir: 'dist',
        sourcemap: true,
        lib: {
          entry: './src/index.ts',
          name: name,
          formats: [
            'umd'
          ],
          fileName: (format: string) => {
            return name + ({
              es: '.esm.js',
              cjs: '.cjs',
              umd: '.js'
            })[format]
          }
        },
        rollupOptions: {
          external: [
            'vue', 
            'element-plus'
          ],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            assetFileNames: (chunkInfo: { name: string }) => {
              if(chunkInfo.name==='style.css'){
                return `${name}.[ext]`;
              }
              return `[name].[ext]`
            }
          },
        }
      }
    }
  }
})


