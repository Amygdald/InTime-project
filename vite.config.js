import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server:{
  //   host: "192.168.43.40"
  // }
  base:'./'
})
