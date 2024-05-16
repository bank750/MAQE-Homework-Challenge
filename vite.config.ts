import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import eslint from "vite-plugin-eslint"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default ({ mode }: any) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
	const port = process.env.VITE_APP_PORT ? parseInt(process.env.VITE_APP_PORT) || 3000 : 3000
	return defineConfig({
		plugins: [vue()], //, eslint()
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/scss";`,
				},
			},
		},
		server: {
			host: true,
			port,
		},
		preview: {
			host: true,
			port,
		},
	})
}
