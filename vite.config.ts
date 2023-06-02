import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import postcssPresetEnv from 'postcss-preset-env';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { createHtmlPlugin } from 'vite-plugin-html';
import { wrapperEnv } from './src/utils/getEnv';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_GLOB_APP_TITLE
          }
        }
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
          // additionalData: `@import "@/styles/var.less";`
        }
      },
      postcss: {
        plugins: [
          postcssPresetEnv({
            browsers: ['Chrome > 40', 'ff > 31', 'ie 11']
          })
        ]
      }
    },
    resolve: {
      // 别名配置
      alias: {
        '@assets': path.join(__dirname, 'src/assets'),
        '@': path.resolve(__dirname, 'src')
      }
    }
    // server: {
    // 	host: true,
    // 	port: 5173,
    // 	cors: true,
    // 	proxy: {
    // 		'/api/v1/vul': {
    // 			target: env.VITE_APP_PROXY_TARGET + ':5999',
    // 			// target: 'http://172.16.0.202:5999',
    // 			// target: 'http://172.16.0.62:5999',
    // 			changeOrigin: true, //是否跨域
    // 			secure: false
    // 		}
    // 	}
    // },
    // build: {
    // 	outDir: 'build'
    // }
  };
});
